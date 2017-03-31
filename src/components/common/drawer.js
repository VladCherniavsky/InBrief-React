/**
 * Created by vlad on 5.2.17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import colors from './colors';
import {Link} from 'react-router';

const styles = {
    color: colors.$white,
    title: {
        cursor: 'pointer'
    }
};

export default class DrawerSimpleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle() {
        this.setState({open: !this.state.open});
    }
    handleTouchTap() {
        alert('redirect to home');
    }

    render() {
        return (
            <div>
                <IconButton iconStyle={styles}>
                    <NavigationMenu onClick={() => this.handleToggle()}/>
                </IconButton>

                {<Drawer open={this.state.open}
                         docked={false}
                         onRequestChange={::this.handleToggle}>
                    <AppBar title={<span style={styles.title}>InBrief</span>}
                            onTitleTouchTap={this.handleTouchTap}
                            onLeftIconButtonTouchTap={::this.handleToggle}/>
                    <Link to="/links">
                        <MenuItem onTouchTap={::this.handleToggle}>
                            Links
                        </MenuItem>
                    </Link>
                    <Link to="/home">
                        <MenuItem onTouchTap={::this.handleToggle}>
                            Home
                        </MenuItem>
                    </Link>
                </Drawer>}
            </div>
        );
    }
}
