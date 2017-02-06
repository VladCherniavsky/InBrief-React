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

const styles = {
    color: colors.$white
};

export default class DrawerSimpleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <IconButton iconStyle={styles}>
                    <NavigationMenu onClick={() => this.handleToggle()}/>
                </IconButton>

                {<Drawer open={this.state.open}>
                    <AppBar title="InBrief"
                            onLeftIconButtonTouchTap ={() => {
                                this.handleToggle();
                            }}/>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>}
            </div>
        );
    }
}
