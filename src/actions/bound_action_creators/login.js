/**
 * Created by vlad on 2/19/2017.
 */
import {login} from '../action_creators/login';
export const boundLogin = (creds) => (
    (dispatch) => {
        dispatch(login(creds));
    }
);
