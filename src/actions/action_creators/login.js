/**
 * Created by vlad on 2/19/2017.
 */
import {LOGIN} from '../index';

export const login = (creds) => ({
    type: LOGIN,
    payload: creds
});
