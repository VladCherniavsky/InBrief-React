/**
 * Created by User on 4/28/2017.
 */
import Axios from 'axios';
/* import configureStore from '../../store/configureStore';

const store = configureStore();

const state = store.getState();*/


const instance = Axios.create({
    baseURL: 'http://localhost:3005/'
});


instance.interceptors.request.use((config) => {
    return config;
    }, (err) => {

});

export default instance;
