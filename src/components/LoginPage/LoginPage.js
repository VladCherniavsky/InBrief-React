/**
 * Created by vlad on 9/29/2016.
 */
import React from 'react';
import stylesScss from './style.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import {
    blue500,
    grey50,
    grey500
} from 'material-ui/styles/colors';

const styles = {
    hintStyle: {
        color: grey500
    },
    underlineStyle: {
        borderColor: blue500
    },
    floatingLabelStyle: {
        color: grey50
    },
    floatingLabelFocusStyle: {
        color: blue500
    },
    button: {
        color: 'white'
    },
    input: {
        color: 'white'
    }
};
class LoginPage extends React.Component {
    render() {
        return (
            <div className={stylesScss.loginPage}>
                <form className={stylesScss.form}>
                    <div className={stylesScss.fields}>
                        <TextField
                            hintText="Please enter email"
                            hintStyle={styles.hintStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={
                                    styles.floatingLabelFocusStyle
                                }
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelText="Email"
                            rows={1}
                            inputStyle={styles.input}
                        /><br />
                        <TextField
                            hintText="Please enter password"
                            hintStyle={styles.hintStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={
                                    styles.floatingLabelFocusStyle
                                }
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelText="Password"
                            inputStyle={styles.input}
                            type="password"
                            rows={1}
                        /><br />
                        <RaisedButton
                            label="Login"
                            labelPosition="after"
                            backgroundColor={blue500}
                            fullWidth={true}
                            icon={<Lock />}
                            labelColor={styles.button.color}/>
                    </div>
                </form>


            </div>
        );
    }
}

export default LoginPage;
