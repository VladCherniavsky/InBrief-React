import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from './drawer';
import LoginButton from './LoginButton';
import MenuLogged from './Menu/Menu';

class Header extends PureComponent {
    render() {
        const {isLogged, userEmail} = this.props;
        return (
            <div>
                <AppBar
                    title="InBrief"
                    iconElementLeft={ <Drawer />}
                    iconElementRight={
                        isLogged
                            ? <MenuLogged userEmail={userEmail}/>
                            : <LoginButton />
                    }>
                </AppBar>

            </div>
        );
    }


}
Header.propTypes = {
    userEmail: PropTypes.string,
    logout: PropTypes.func,
    isLogged: PropTypes.bool,
    login: PropTypes.func
};

export default Header;
