/**
 * Created by vlad on 2/19/2017.
 */
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_CLEAR_ERROR
} from '../index';

export const loginRequest = (creds) => ({
    type: LOGIN_REQUEST,
    payload: creds
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFail = (err) => ({
    type: LOGIN_FAIL,
    payload: err
});

export const clearError = () => ({
    type: LOGIN_CLEAR_ERROR
});
