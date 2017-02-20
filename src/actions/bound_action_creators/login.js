/**
 * Created by vlad on 2/19/2017.
 */
import {login} from '../action_creators/login';
import {sendLoginRequest} from '../../services/api/login';
export const boundLogin = (creds) => (
    (dispatch) => {
        dispatch(login(creds));

        return sendLoginRequest(creds)
            .then((res) => {
console.log('res', res);
})
            .catch(console.error);
    }
);
