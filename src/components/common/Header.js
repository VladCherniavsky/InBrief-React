import React, {PropTypes, Component} from 'react';
import {Link, IndexLink} from 'react-router';
import AuthButton from './AuthButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Drawer from './drawer';


class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
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
        logged: true
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
                <Drawer/>

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
