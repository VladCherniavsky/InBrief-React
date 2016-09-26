import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import isLogged from './authReducer'

const  rootReducer = combineReducers({
    courses, authors, ajaxCallsInProgress, isLogged
});

export default rootReducer;
