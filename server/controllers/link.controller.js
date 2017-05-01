/**
 * Created by Vlad on 4/22/2017.
 */
import Link from '../models/link';

export const add = (req, res, next) => {
    const link = global._.pick(req.body, Object.keys(req.body));
    link.userId = req.decoded._id;

   return new Link(link)
        .save()
        .then((data) => res.json(data))
        .catch(next);
};


export const getAll = (req, res, next) => {
    return Link
        .findAndCount()
        .then((data)=> res.json(data))
        .catch(next);
};
