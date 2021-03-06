/**
 * Created by Vlad on 4/22/2017.
 */
import Link from '../models/link';
import {getQuery} from '../libs/helper';

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
        .findAndCount(getQuery(req), null, null, 'userId')
        .then((data)=> {
            return res.json(data);
        })
        .catch(next);
};

export const redirect = (req, res, next) => {
    return Link
        .findOneAndUpdate({
            shortLink: req.params.shortLink
        }, {$inc: {clicks: 1}})
        .then((link) => {
            return link ? res.redirect(link.link) : res.json();
        })
        .catch(next);
};
