/**
 * Created by Vlad on 4/22/2017.
 */
import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {goToLogin} from '../../services/router';

class Login extends Component {
    static muiName = 'FlatButton';

    goToLoginPage() {
        goToLogin();
    }

    render() {
        return (
            <FlatButton {...this.props}
                        label="Login"
                        onClick={::this.goToLoginPage}>
            </FlatButton>
        );
    }
}

export default Login;
