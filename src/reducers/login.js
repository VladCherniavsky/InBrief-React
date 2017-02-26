/**
 * Created by vlad on 2/19/2017.
 */
import * as types from '../actions/index';

export const initialState = {
    isLogged: false
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {...state, isLogged: false};
        case types.LOGIN_SUCCESS:
            return {...state, isLogged: true};
        case types.LOGIN_FAIL:
            return false;

        default:
            return state;
    }
}
