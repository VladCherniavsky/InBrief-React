import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/courseActions';

class App extends React.Component {
    logout() {
        this.props.actions.logout();
    }
    login() {
        this.props.actions.login();
    }
    render() {
        return (
            <div>
                <Header
                    logout={() => this.logout()}
                    login={() => this.login()}
                    isLogged={this.props.isLogged}/>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>

        );
    }
}
App.propTypes = {
    children: PropTypes.element,
    loading: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        isLogged: state.isLogged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
