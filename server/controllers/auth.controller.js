/**
 * Created by vlad on 2/20/2017.
 */
import User from '../models/user';
import {createError} from '../libs/error';
import {compare} from '../libs/crypto';
import * as jwt from '../libs/jwt';

export async function login(req, res, next) {
    try {
        const user = await User.findOne({
            email: req.body.email || req.decoded.email
        });
        if(req.decoded) {
            return successLogin(user);
        } else {
            const message = 'Authentication failed. User not found';
            return user
                ? checkPassword(user)
                : next(createError(message, 401));
        }
    } catch(err) {
        return next(err);
    }

    async function checkPassword(user) {
       try {
           let result = await compare(req.body.password, user.password);
           return result
               ? successLogin(user)
               : next(createError('Invalid Password', 401));
       } catch(err) {
           next(err);
       }
    }

    function successLogin(user) {
        const keys = ['email', '_id'];
        const dataForToken = global._.pick(user, keys);
        const token = jwt.signToken(dataForToken);
        jwt.setToken(res, token);
        res.setHeader('userInfo', JSON.stringify(dataForToken));
        res.json();
    }
}
export function signup(req, res, next) {
    const user = global._.pick(req.body, Object.keys(req.body));
    return new User(user)
        .save()
        .then((data) => res.json(data))
        .catch(next);
}
