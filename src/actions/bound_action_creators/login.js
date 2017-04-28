/**
 * Created by vlad on 2/19/2017.
 */
import {
    loginRequest,
    loginSuccess,
    loginFail,
    clearError
} from '../action_creators/login';
import {sendLoginRequest} from '../../services/api/login';
export const boundLogin = (creds) => (
    (dispatch) => {
        dispatch(loginRequest(creds));

        return sendLoginRequest(creds)
            .then((res) => {
                const data = {
                    token: res.headers['x-access-token'],
                    user: JSON.parse(res.headers['userinfo'])
                };
                dispatch(loginSuccess(data));
            })
            .catch((err) => {
                dispatch(loginFail(err.response.data));
                dispatch(clearError());
            });
    }
);
