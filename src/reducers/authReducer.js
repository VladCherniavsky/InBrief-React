/**
 * Created by vlad on 9/26/2016.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.isLogged, action) {
    switch (action.type) {
        case types.LOGOUT:
            return false;
        case types.LOGIN:
            return true;

        default:
            return state;
    }
}
