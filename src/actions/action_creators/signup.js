/**
 * Created by vlad on 3/6/2017.
 */
import {
    SIGNUP_PENDING,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../index';

export const signupPending = (data) => ({
    type: SIGNUP_PENDING,
    payload: data
});

export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

export const signupFail = (err) => ({
    type: SIGNUP_FAIL,
    payload: err
});
