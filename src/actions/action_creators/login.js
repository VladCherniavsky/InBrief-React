/**
 * Created by vlad on 2/19/2017.
 */
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_CLEAR_ERROR,
    LOGIN_NEW_TOKEN
} from '../index';

export const loginRequest = (creds) => ({
    type: LOGIN_REQUEST,
    payload: creds
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginFail = (err) => ({
    type: LOGIN_FAIL,
    payload: err
});

export const clearError = () => ({
    type: LOGIN_CLEAR_ERROR
});
export const setNewToken = (data) => ({
    type: LOGIN_NEW_TOKEN,
    payload: data
});
