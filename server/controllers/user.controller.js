/**
 * Created by Vlad on 4/30/2017.
 */
import User from '../models/user';

export const getAll = (req, res, next) => {
    return User
        .findAndCount()
        .then((data)=> res.json(data))
        .catch(next);
};
