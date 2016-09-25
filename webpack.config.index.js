/**
 * Created by vlad on 9/25/2016.
 */
import webpackConfigDev from './webpack.config.dev';
import webpackConfigProd from './webpack.config.prod'

let webpackConfig;

if(process.env.NODE_ENV === 'development') {
    console.log('hi from dev');
    webpackConfig =  webpackConfigDev;
} else {
    console.log('hi from prod');
    webpackConfig =  webpackConfigProd;
}
export default webpackConfig;
