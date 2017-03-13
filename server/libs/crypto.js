/**
 * Created by vlad on 2/21/2017.
 */
import bcrypt from 'bcrypt';
import config from '../configuration';

export const getHash = (stringText) => {
    return bcrypt.hash(stringText, parseInt(config.get('saltRounds')));
};

export const compare = (string, hash) => {
    return bcrypt.compare(string, hash);
};
