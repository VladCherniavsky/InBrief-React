/**
 * Created by Vlad on 5/1/2017.
 */
import Axios from './axios';


export const sendAddLinkRequest = (data) => {
    return Axios.post('api/link', data);
};

export const getAllLinks = (data) => {
    return Axios.get('api/link', {params: data});
};
