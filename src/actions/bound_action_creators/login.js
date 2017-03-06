/**
 * Created by vlad on 2/19/2017.
 */
import {loginRequest, loginSuccess} from '../action_creators/login';
import {sendLoginRequest} from '../../services/api/login';
export const boundLogin = (creds) => (
    (dispatch) => {
        dispatch(loginRequest(creds));

        return sendLoginRequest(creds)
            .then((res) => {
                dispatch(loginSuccess());
            })
            .catch();
    }
);
