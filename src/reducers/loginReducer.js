/**
 * Created by vlad on 2/19/2017.
 */
import * as types from '../actions/index';

export const initialState = {
    isLogged: false,
    error: null
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {...state, isLogged: false};
        case types.LOGIN_SUCCESS:
            return {...state, isLogged: true, error: null};
        case types.LOGIN_FAIL:
            return {...state, isLogged: false, error: action.payload};
        case types.LOGIN_CLEAR_ERROR:
            return {...state, error: null};

        default:
            return state;
    }
}
