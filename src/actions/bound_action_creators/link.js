/**
 * Created by Vlad on 5/1/2017.
 */
import {
    linkAddRequest,
    linkAddSuccess,
    linkAddFail,
    linkClearError,
    linkClear
} from '../action_creators/link';

import {sendAddLinkRequest} from '../../services/api/link';

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

export const clearLink = () => (
    (dispatch) => {
        dispatch(linkClear());
    }
);
