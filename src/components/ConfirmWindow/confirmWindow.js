/**
 * Created by Vlad on 5/8/2017.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class ConfirmWindow extends React.Component {
    state = {
        open: false
    };

    handleOpen(title, message) {
        this.setState({
            open: true,
            title: title,
            message: message
        });
    }

    handleClose() {
        this.setState({
            open: false,
            title: '',
            message: ''
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={::this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={::this.handleClose}
            />
        ];

        return (
            <div>
                <Dialog
                    title={this.state.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={::this.handleClose}>
                    {this.state.message}
                </Dialog>
            </div>
        );
    }
}
