import React, { PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header
                    loading={this.props.loading}/>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>

        );
    }
}
App.propTypes = {
    children: PropTypes.element,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log('-------state', state);
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}
export default connect(mapStateToProps)(App);
