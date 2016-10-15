/**
 * Created by vlad on 9/25/2016.
 */
import dbConnection from './libs/mongoose';
import express from 'express';
import webpack from 'webpack';
import compression from 'compression';
import webpackMiddleware  from './middlewares/webpackMiddleware';
import path from 'path';
import config from './configuration';
import webpackConfig from '../webpack.config.index';
import routers from './routers';
import * as common from './middlewares/common';

const app = express();
const compiler = webpack(webpackConfig);

global._root = __dirname;

process.env.NODE_ENV === 'development'
    ? webpackMiddleware(app, compiler, webpackConfig)
    : app.use(compression());

app.use(express.static(path.join(__dirname, config.get('static'))));
app.use('/api', routers);
app.get('*', common.sendIndexHtml);
app.use(common.errorHandler);
app.listen(config.get('port'), common.listen);
