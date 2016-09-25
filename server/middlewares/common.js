/**
 * Created by vlad on 9/25/2016.
 */
/* eslint-disable no-console */
import config from '../configuration';
import path from 'path';

export function listen(err) {
    return err
        ? console.log(err)
        : console.log(`Server is running on port:${config.get('port')}`);
}
export function errorHandler(req, res, next, err) {
    return res.status(err.status ? err.status : 500).json(err);
}
export function sendIndexHtml(req, res) {
    res.sendFile(path.join(global._root, config.get('static') + '/index.html'));
}