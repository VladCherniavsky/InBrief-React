/**
 * Created by vlad on 2/20/2017.
 */
import User from '../models/user';
// import {createError} from '../libs/error';

export function login(req, res, next) {
    return res.json(req.body);
}
export function signup(req, res, next) {
    const user = global._.pick(req.body, Object.keys(req.body));
    return new User(user)
        .save()
        .then((data) => res.json(data))
        .catch(next);
}
