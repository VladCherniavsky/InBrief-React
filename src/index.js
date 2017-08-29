/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {configureStore} from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500, deepPurple800} from 'material-ui/styles/colors';
import {sendLoginRequest} from './services/api/login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/semantic-ui-menu/menu.min.css';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    },
    appBar: {
        color: deepPurple800
    }
});

const store = configureStore();
if(localStorage.getItem('token')) {
    sendLoginRequest();
}


injectTapEventPlugin();

render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);
