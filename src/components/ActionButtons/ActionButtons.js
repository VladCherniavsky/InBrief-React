/**
 * Created by User on 5/5/2017.
 */
import React from 'react';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import TrashIcon from 'material-ui/svg-icons/action/delete-forever';
import Info from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';

const ActionButtons = (props) => {
    const {infoClick, editClick, removeclick} = props;
    return (
        <div>
            <IconButton onTouchTap={infoClick}>
                <Info/>
            </IconButton>
            <IconButton onTouchTap={editClick}>
                <ModeEditIcon/>
            </IconButton>
            <IconButton onTouchTap={removeclick}>
                <TrashIcon/>
            </IconButton>
        </div>
    );
};

export default ActionButtons;
