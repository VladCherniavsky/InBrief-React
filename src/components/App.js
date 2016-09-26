import React, { PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/courseActions';

class App extends React.Component {
    logout () {
        this.props.actions.logout();
    }
    login () {
        this.props.actions.login();
    }
    render () {
        console.log(this.props.isLogged);
        return (
            <div>
                <Header
                    loading={this.props.loading}
                    logout={()=> {this.logout()}}
                    login={() => {this.login()}}
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
