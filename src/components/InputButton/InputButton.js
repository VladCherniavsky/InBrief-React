/**
 * Created by Vlad on 4/22/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/content/save';
import TextField from 'material-ui/TextField';

const InputButton = ({action, style, buttonLabelText, placeHolder}) => {
    return (
        <div>
            <TextField
                underlineFocusStyle={style.underlineStyle}
                hintText={placeHolder} >
            </TextField>
            <RaisedButton label={buttonLabelText}
                          labelPosition="before"
                          buttonStyle={style.buttonStyle}
                          style={style.button}
                          icon={<ActionAndroid />}
                          primary={true}>
            </RaisedButton>
        </div>
    );
};

InputButton.propTypes = {
    action: PropTypes.func,
    style: PropTypes.object.isRequired,
    buttonLabelText: PropTypes.string,
    placeHolder: PropTypes.string
};

export default InputButton;
