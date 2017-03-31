/**
 * Created by User on 2/6/2017.
 */
import {browserHistory} from 'react-router';

export const goToLogin = () => {
    browserHistory.push('/login');
};

export const goToHome = () => {
    browserHistory.push('/home');
};
