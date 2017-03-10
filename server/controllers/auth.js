/**
 * Created by vlad on 2/20/2017.
 */
import User from '../models/user';

export function login(req, res, next) {
    console.log('login')
    return res.json(req.body);
}
export function signup(req, res, next) {
    return new User({
        userName: 'vladtest',
        password: 'vladtest',
        email: 'vladtest@gmail.com'
    })
        .save()
        .then((data) => res.json(data))
        .catch(next);
}
