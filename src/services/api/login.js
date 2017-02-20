/**
 * Created by vlad on 2/20/2017.
 */
import Axios from 'axios';

export const sendLoginRequest = (data) =>{
    console.log('data', data);
    return Axios.post('http://localhost:3005/api/login', data);
};
