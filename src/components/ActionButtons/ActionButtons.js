/**
 * Created by User on 5/5/2017.
 */
import React from 'react';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import TrashIcon from 'material-ui/svg-icons/action/delete-forever';
import Info from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';

const ActionButtons = (props) => {
    return (
        <div>
            <IconButton onTouchTap={props.infoClick}>
                <Info/>
            </IconButton>
            <IconButton onTouchTap={props.editClick}>
                <ModeEditIcon/>
            </IconButton>
            <IconButton onTouchTap={props.removeclick}>
                <TrashIcon/>
            </IconButton>
        </div>
    );
};

export default ActionButtons;
