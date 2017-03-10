/**
 * Created by vlad on 3/6/2017.
 */
import {
    signupPending,
    signupSuccess,
    signupFail
} from '../action_creators/signup';
import {sendSignupRequest} from '../../services/api/signup';

export const boundSignup = (data) => (
    (dispatch) => {
        dispatch(signupPending(data));

        return sendSignupRequest(data)
            .then((res) => {
                dispatch(signupSuccess(res));
            })
            .catch((err) => {
                dispatch(signupFail(err));
            });
    }
);
