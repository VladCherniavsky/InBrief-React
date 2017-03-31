/**
 * Created by vlad on 9/29/2016.
 */
import React from 'react';
import stylesScss from './style.scss';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import colors from '../common/colors';
import AuthForm from './AuthForm';
import * as boundLoginActionCreators
    from '../../actions/bound_action_creators/login';
import * as boundSignupActionCreator
    from '../../actions/bound_action_creators/signup';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {goToHome} from '../../services/router';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    slide: {
        padding: 10
    },
    tabs: {
        backgroundColor: colors.$lgPageBackground
    }
};
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {slideIndex: 0};
    }
    handleSubmit(data) {
        this.state.slideIndex
            ? this.props.actions.boundSignup(data)
            : this.props.actions.boundLogin(data);
    }
    handleChangeTab(value) {
        return this.setState({
            slideIndex: value
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        if(nextProps.registeredUser._id) {
            this.setState({slideIndex: 0});
            toastr.success('User added, please log in', 'OK!');
        }
        if(nextProps.isLogged) {
            alert();
            goToHome();
        }
    }

    render() {
        return (
            <div className={stylesScss.loginPage}>
                <div>
                    <Tabs
                        onChange={this.handleChangeTab.bind(this)}
                        value={this.state.slideIndex}
                        tabItemContainerStyle={styles.tabs}>

                        <Tab label="Login" value={0} />
                        <Tab label="Sign Up" value={1} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChangeTab.bind(this)}>
                        <div>
                            <AuthForm isSignUpPage={this.state.slideIndex}
                                      submit={this.handleSubmit.bind(this)}/>
                        </div>
                        <div>
                            <AuthForm isSignUpPage={this.state.slideIndex}
                                      submit={this.handleSubmit.bind(this)} />
                        </div>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isLogged: state.LoginReducer.isLogged,
    registeredUser: state.SignupReducer.user
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...boundLoginActionCreators,
        ...boundSignupActionCreator
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

