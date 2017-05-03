/**
 * Created by Vlad on 5/1/2017.
 */
import * as types from '../actions/index';

export const initialState = {
    loading: false,
    error: null,
    link: null
};

export function linkReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {...state, loading: true};
        case types.LINK_ADD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                link: null
            };
        case types.LINK_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                link: {
                    ...action.payload
                },
                error: null
            };
        case types.LINK_CLEAR_ERROR:
            return {...state, error: null};
        case types.LINK_CLEAR_DATA:
            return {...state, link: null};
        case types.LINK_GET_ALL_REQUEST:
            return {...state, link: null, loading: true};
        case types.LINK_GET_ALL_SUCCESS:
            return {...state, loading: false, links: action.payload};
        case types.LINK_GET_ALL_FAIL:
            return {...state,
                loading: false,
                links: null,
                error: action.payload
            };

        default:
            return state;
    }
}
