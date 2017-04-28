import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header isLogged={this.props.isLogged}
                        userEmail={this.props.userEmail}/>
                {this.props.children}
            </div>

        );
    }
}
App.propTypes = {
    children: PropTypes.element,
    isLogged: PropTypes.bool
};

const mapStateToProps = (state) =>({
    isLogged: state.LoginReducer.isLogged,
    userEmail: state.LoginReducer.user
        ? state.LoginReducer.user.email
        : ''
});

export default connect(mapStateToProps, null)(App);
