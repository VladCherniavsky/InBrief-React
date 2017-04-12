/**
 * Created by vlad on 9/27/2016.
 */
import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({title, onClick}) => {
    return (
        <div className="right menu">
            <a className="ui item" onClick={onClick}>
                {title}
            </a>
        </div>
    );
};

AuthButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default AuthButton;
