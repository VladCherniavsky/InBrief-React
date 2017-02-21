/**
 * Created by vlad on 2/21/2017.
 */
import jwt from 'jsonwebtoken';


export const getToken = (req) => {
    return req.headers['x-access-token'];
};

export const signToken = (data, key, expirationPeriod) => {
    return jwt.sign(
        data,
        key,
        expirationPeriod
    );
};

export const verifyToken = (token, key) => {
    return new Promise((resolve, reject) => {
        return jwt.verify(token, key, (err, decoded) => {
            return err ? reject(err) : resolve(decoded);
        });
    });
};
