/**
 * Created by vlad on 2/19/2017.
 */
import {LOGIN_REQUEST, LOGIN_SUCCESS} from '../index';

export const loginRequest = (creds) => ({
    type: LOGIN_REQUEST,
    payload: creds
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});
