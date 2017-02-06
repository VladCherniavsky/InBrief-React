import React, {PropTypes, Component} from 'react';
// import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Drawer from './drawer';
import {goToLogin} from '../../services/router';


class Login extends Component {
    static muiName = 'FlatButton';

    goToLoginPage() {
        goToLogin();
    }

    render() {
        return (
            <FlatButton {...this.props}
                label="Login"
                onClick={this.goToLoginPage}>
            </FlatButton>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {

    state = {
        logged: false
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };
    // const loginBtn = () => {
    //     return (
    //         <div className="right menu">
    //             <Link to="/login"
    //                   activeClassName="active"
    //                   className="item">Login</Link>
    //         </div>
    //     );
    // };
    render() {
        return (
            <div>
                <AppBar
                    title="InBrief"
                    iconElementLeft={ <Drawer />}
                    iconElementRight={
                        this.state.logged
                            ? <Logged />
                            : <Login />}>
                </AppBar>

            </div>
        );
    }


}
Header.propTypes = {
    logout: PropTypes.func,
    isLogged: PropTypes.bool,
    login: PropTypes.func
};

export default Header;
