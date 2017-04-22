import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLogged: props.isLogged};
    }
    render() {
        return (
            <div>
                <Header isLogged={this.state.isLogged} >
                </Header>

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
    isLogged: state.LoginReducer.isLogged
});

export default connect(mapStateToProps, null)(App);
