/**
 * Created by vlad on 9/25/2016.
 */
/* eslint-disable no-console */
import express from 'express';
import webpack from 'webpack';
import compression from 'compression';
import webpackMiddleware  from './middlewares/webpackMiddleware';
import path from 'path';
import config from './configuration';
import webpackConfig from '../webpack.config.index';

const app = express();
const compiler = webpack(webpackConfig);

process.env.NODE_ENV === 'development'
    ? webpackMiddleware(app, compiler, webpackConfig)
    : app.use(compression());

app.use(express.static(path.join(__dirname, config.get('static'))));
app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, config.get('static') + '/index.html'));
});

app.listen(config.get('port'), (err) => {
    err ? console.log(err) : console.log(`Server is running on port:${config.get('port')}`);
});