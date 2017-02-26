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
import * as loginActionCreators
    from '../../actions/bound_action_creators/login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleChange(event) {
        return this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit() {
        this.props.actions.boundLogin(this.state);
    }

    render() {
        return (
            <div className={stylesScss.loginPage}>

                <form className={stylesScss.form}>
                    <div className={stylesScss.fields}>

                        <TextField
                            fullWidth="true"
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
                            onChange={this.handleChange.bind(this)}
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
                            name="password"
                            fullWidth="true"
                            onChange={this.handleChange.bind(this)}
                        /><br />
                        <RaisedButton
                            label="Login"
                            labelPosition="after"
                            backgroundColor={blue500}
                            fullWidth={true}
                            icon={<Lock />}
                            onClick={this.handleSubmit.bind(this)}
                            labelColor={styles.button.color}/>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLogged: state.LoginReducer.isLogged
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(loginActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
