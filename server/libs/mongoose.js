/**
 * Created by vlad on 10/13/2016.
 */
import mongoose from 'mongoose';
import config from '../configuration';
import bluebird from 'bluebird';
/* eslint-disable no-console */

mongoose.Promise = bluebird;

mongoose.connect(config.get('db:connection'));

const connection = mongoose.connection;

connection.on('error', function(error) {
    console.log('db connection error', error);
});

connection.once('open', function() {
    console.log('db is connected');
});
connection.once('close', function() {
    console.log('db is closed');
});
export default connection;
