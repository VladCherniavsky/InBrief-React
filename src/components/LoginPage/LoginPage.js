/**
 * Created by vlad on 9/29/2016.
 */
import React from 'react';
import stylesScss from './style.scss';
import TextField from 'material-ui/TextField';
import {orange500, blue500, deepPurple900, grey50, lightGreenA700} from 'material-ui/styles/colors';

const styles = {
    errorStyle: {
        color: orange500
    },
    underlineStyle: {
        borderColor: lightGreenA700
    },
    floatingLabelStyle: {
        color: grey50
    },
    floatingLabelFocusStyle: {
        color: blue500
    }
};
class LoginPage extends React.Component {
    render() {
        return (
            <div className={stylesScss.loginPage}>
                <form action="">
                    <TextField
                        hintText="Message Field"
                        hintStyle={styles.errorStyle}
                        errorText="This field is required"

                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText="MultiLine and FloatingLabel"
                        rows={1}
                    /><br />

                </form>

            </div>
        );
    }
}

export default LoginPage;
