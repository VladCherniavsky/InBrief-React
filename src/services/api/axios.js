/**
 * Created by User on 4/28/2017.
 */
import Axios from 'axios';
import {getStore} from '../../store/configureStore';
import {setNewToken} from '../../actions/action_creators/login';
import toastr from 'toastr';

const instance = Axios.create({
    baseURL: 'http://localhost:3000/'
});


instance.interceptors.request.use((config) => {
    const store = getStore();
    if(store) {
        const state = store.getState().LoginReducer;
        const token = state.token;
        token ? config.headers['x-access-token'] = token : null;
    }
    return config;
    }, (err) => {

});
instance.interceptors.response.use((response) => {
    const data = {
        token: response.headers['x-access-token'],
        user: response.headers['userinfo']
            ? JSON.parse(response.headers['userinfo'])
            : null
    };
    data.token && data.user ? updateToken(data) : null;

    function updateToken(data) {
        localStorage.setItem('token', data.token);
        const store = getStore();
        store.dispatch(setNewToken(data));
    }
    return response;
}, (error) => {
     const errorData = error.response.data;
    if(errorData.name === 'JsonWebTokenError') {
        localStorage.clear();
        toastr.error(errorData.message + '! Please, log in.', 'Opps');
    }
    return Promise.reject(error);
});

export default instance;
