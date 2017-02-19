/**
 * Created by vlad on 2/19/2017.
 */
import * as types from '../actions/index';

export const initialState = {
    isLogged: false
};

export function loginReducer(state = initialState.isLogged, action) {
    console.log('action', action);
    switch (action.type) {
        case types.LOGIN:
            return false;
        case types.LOGIN_SUCCESS:
            return true;
        case types.LOGIN_FAIL:
            return false;

        default:
            return state;
    }
}
