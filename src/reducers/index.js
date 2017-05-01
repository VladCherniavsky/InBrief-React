import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {loginReducer} from './loginReducer';
import {signupReducer} from './signupReducer';
import {linkReducer} from './linkReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    LoginReducer: loginReducer,
    SignupReducer: signupReducer,
    LinkReducer: linkReducer
});

export default rootReducer;
