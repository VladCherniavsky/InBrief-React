/**
 * Created by Vlad on 5/1/2017.
 */
import {
    LINK_ADD_REQUEST,
    LINK_ADD_SUCCESS,
    LINK_ADD_FAIL,
    LINK_CLEAR_ERROR,
    LINK_CLEAR_DATA,
    LINK_GET_ALL_REQUEST,
    LINK_GET_ALL_SUCCESS,
    LINK_GET_ALL_FAIL
} from '../index';

export const linkAddRequest = () => ({
    type: LINK_ADD_REQUEST
});

export const linkAddSuccess = (data) => ({
    type: LINK_ADD_SUCCESS,
    payload: data
});

export const linkAddFail = (data) => ({
    type: LINK_ADD_FAIL,
    payload: data
});

export const linkClearError = () => ({
    type: LINK_CLEAR_ERROR
});

export const linkClear = () => ({
    type: LINK_CLEAR_DATA
});

export const linkGetAllRequest = (data) => ({
    type: LINK_GET_ALL_REQUEST,
    payload: data
});

export const linkGetAllSuccess = (data) => ({
    type: LINK_GET_ALL_SUCCESS,
    payload: data
});

export const linkGetAllFail = (data) => ({
    type: LINK_GET_ALL_FAIL,
    payload: data
});
