/**
 * Created by Vlad on 5/1/2017.
 */
import {
    linkAddRequest,
    linkAddSuccess,
    linkAddFail,
    linkClearError,
    linkClear,
    linkGetAllRequest,
    linkGetAllSuccess,
    linkGetAllFail
} from '../action_creators/link';

import {
    sendAddLinkRequest,
    getAllLinks
} from '../../services/api/link';

export const boundAddLink = (data) => (
    (dispatch) => {
        dispatch(linkAddRequest());

        return sendAddLinkRequest(data)
            .then((res) => {
                dispatch(linkAddSuccess(res.data));
            })
            .catch((err) => {
                dispatch(linkAddFail(err.response.data));
                dispatch(linkClearError());
            });
    }
);

export const boundClearLink = () => (
    (dispatch) => {
        dispatch(linkClear());
    }
);

export const boundGetLinks = (data) => (
    (dispatch) => {
        dispatch(linkGetAllRequest());

        return getAllLinks(data)
            .then((res) => dispatch(linkGetAllSuccess(res.data)))
            .catch((err) => {
                    dispatch(linkGetAllFail(err.response.data));
            });
    }
);
