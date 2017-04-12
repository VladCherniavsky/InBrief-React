/**
 * Created by vlad on 3/4/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import stylesScss from './style.scss';
import colors from '../common/colors';
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
        color: colors.$white
    },
    input: {
        color: colors.$white
    }
};

class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            showSignUpPage: props.isSignUpPage
        };
    }
    componentWillReceiveProps(nextProps) {
        if(this.state.showSignUpPage !== nextProps.isSignUpPage) {
            this.setState({
                showSignUpPage: nextProps.isSignUpPage,
                email: '',
                password: '',
                repeatPassword: ''
            });
        }
    }
    handleChange(event) {
        return this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit() {
        this.props.submit(this.state);
    }

    render() {
        return(
            <div>
                <form className={stylesScss.form}>
                    <div className={stylesScss.fields}>
                        <TextField
                            fullWidth={true}
                            autoComplete="off"
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
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange.bind(this)} />
                        <br />
                        <TextField
                            fullWidth={true}
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
                            name="password"
                            onChange={this.handleChange.bind(this)} />
                        <br />
                        {this.state.showSignUpPage
                            ? <TextField
                                fullWidth={true}
                                hintText="Please repeat password"
                                hintStyle={styles.hintStyle}
                                floatingLabelStyle={styles.floatingLabelStyle}
                                floatingLabelFocusStyle={
                                    styles.floatingLabelFocusStyle
                                }
                                underlineFocusStyle={styles.underlineStyle}
                                floatingLabelText="Repeat Password"
                                inputStyle={styles.input}
                                type="password"
                                rows={1}
                                name="repeatPassword"
                                onChange={this.handleChange.bind(this)}/>
                            : null}
                        <br/>
                        <RaisedButton
                            label={this.state.showSignUpPage
                                ? 'Sign Up'
                                : 'Login'
                            }
                            labelPosition="after"
                            backgroundColor={blue500}
                            fullWidth={true}
                            icon={<Lock />}
                            labelColor={styles.button.color}
                            onClick={this.handleSubmit.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }

}
AuthForm.propTypes = {
    isSignUpPage: PropTypes.number,
    submit: PropTypes.func
};
export default AuthForm;
