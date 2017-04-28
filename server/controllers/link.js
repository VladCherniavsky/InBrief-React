/**
 * Created by Vlad on 4/22/2017.
 */
// import Link from '../models/link';
import shortid from 'shortid';

export const add = (req, res, next) => {
    // const link = global._.pick(req.body, Object.keys(req.body));
    return res.json(shortid.generate());

   /* return new Link(link)
        .save()
        .then((data) => res.json(data))
        .catch(next);*/
};
