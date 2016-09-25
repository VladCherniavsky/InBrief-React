/**
 * Created by vlad on 9/25/2016.
 */
const nconf = require('nconf');
const path = require('path');
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);

nconf.argv()
    .env()
    .file({file: path.join(__dirname, process.env.NODE_ENV + '.json')});

export default nconf;