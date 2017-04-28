import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from './drawer';
import LoginButton from './LoginButton';
import MenuLogged from './Menu';

class Header extends PureComponent {
    render() {
        const {isLogged} = this.props;
        return (
            <div>
                <AppBar
                    title="InBrief"
                    iconElementLeft={ <Drawer />}
                    iconElementRight={
                        isLogged
                            ? <MenuLogged />
                            : <LoginButton />
                    }>
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
