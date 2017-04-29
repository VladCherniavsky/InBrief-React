/**
 * Created by User on 4/29/2017.
 */

import {getToken, verifyToken} from '../libs/jwt';

export default function checkAccess(req, res, next) {
    const token = getToken(req);
    return token ? checkToken(token) : next();

    async function checkToken(token) {
        try {
            const decoded = await verifyToken(token);
            req.decoded = decoded;
            next();
        } catch (err) {
            next(err);
        }
    }
}
