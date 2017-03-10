import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {loginReducer} from './loginReducer';
import {signupReducer} from './signupReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    LoginReducer: loginReducer,
    SignupReducer: signupReducer
});

export default rootReducer;
