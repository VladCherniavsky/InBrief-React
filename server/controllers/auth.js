/**
 * Created by vlad on 2/20/2017.
 */
import User from '../models/user';
export function login(req, res, next) {
    return res.json('fff55555');
}
export function signup(req, res, next) {
    return new User({
        userName: 'vlfad',
        password: 'qweqweqwr',
        email: 'vlafd@gmail.com'
    })
        .save()
        .then((data) => res.json(data))
        .catch(next);
}
