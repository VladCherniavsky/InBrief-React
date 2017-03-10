/**
 * Created by vlad on 3/6/2017.
 */
import * as types from '../actions/index';

export const initialState = {
    loading: false,
    error: '',
    user: ''

};

export function signupReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGNUP_PENDING:
            return {...state, loading: true};
        case types.SIGNUP_SUCCESS:
            return {
                error: '',
                loading: false,
                user: action.payload};
        case types.SIGNUP_FAIL:
            return {
                error: action.payload,
                user: '',
                loading: false
            };

        default:
            return state;
    }
}
