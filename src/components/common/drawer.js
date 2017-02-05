/**
 * Created by vlad on 5.2.17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

export default class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {open: false};

    }
    handleToggle () {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <IconButton >
                    <NavigationMenu onClick={() => this.handleToggle()}/>
                </IconButton>
                {<Drawer open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>}
            </div>
        );
    }
}
