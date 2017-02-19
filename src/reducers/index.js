import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import isLogged from './authReducer';
import {loginReducer} from './login';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    isLogged,
    LoginReducer: loginReducer
});

export default rootReducer;
