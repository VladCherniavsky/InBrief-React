/**
 * Created by vlad on 3/6/2017.
 */
import Axios from 'axios';

export const sendSignupRequest = (data) => {
    return Axios.post('http://localhost:3005/api/signup', data);
};
