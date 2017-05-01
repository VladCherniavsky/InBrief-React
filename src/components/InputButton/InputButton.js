/**
 * Created by Vlad on 4/22/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/content/save';
import TextField from 'material-ui/TextField';
import styleScss from './style.scss';

const InputButton = (props) => {
    const {
        onClick,
        style,
        buttonLabelText,
        placeHolder,
        onChange,
        inputValue
    } = props;


    return (
        <div>
            <TextField
                className={styleScss.input}
                underlineFocusStyle={style.underlineStyle}
                hintText={placeHolder}
                name="link"
                value={inputValue}
                onChange={onChange}>
            </TextField>
            <RaisedButton label={buttonLabelText}
                          labelPosition="before"
                          buttonStyle={style.buttonStyle}
                          style={style.button}
                          onClick={onClick}
                          icon={<ActionAndroid />}
                          className={styleScss.btn}
                          primary={true}>
            </RaisedButton>
        </div>
    );
};

InputButton.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    style: PropTypes.object.isRequired,
    buttonLabelText: PropTypes.string,
    placeHolder: PropTypes.string
};

export default InputButton;
