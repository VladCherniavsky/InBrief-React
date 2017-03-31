/**
 * Created by vlad on 3/6/2017.
 */
import {
    SIGNUP_PENDING,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_CLEAR_USER
} from '../index';

export const signupPending = (data) => ({
    type: SIGNUP_PENDING,
    payload: data
});

export const signupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data
});

export const signupFail = (err) => ({
    type: SIGNUP_FAIL,
    payload: err
});

export const clearUser = () => ({
    type: SIGNUP_CLEAR_USER
});
