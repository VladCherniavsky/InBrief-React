/**
 * Created by vlad on 2/20/2017.
 */
import Axios from './axios';


export const sendLoginRequest = (data) => {
    return Axios.post('api/login', data);
};
