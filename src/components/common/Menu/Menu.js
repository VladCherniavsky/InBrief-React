/**
 * Created by Vlad on 4/22/2017.
 */
import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AccountBoxItem from 'material-ui/svg-icons/action/account-box';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {white} from 'material-ui/styles/colors';
import styleScc from './style.scss';

const Menu = ({iconStyle, userEmail}) => {
    return (
        <div>

            {
                userEmail &&
                <span className={styleScc.userEmail}>{userEmail}</span>
            }
            {
                userEmail &&
                <span>
                    <AccountBoxItem color={white}></AccountBoxItem>
                </span>
            }

            <IconMenu
                iconStyle = {iconStyle}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        </div>
    );
};

Menu.muiName = 'IconMenu';

export default Menu;
