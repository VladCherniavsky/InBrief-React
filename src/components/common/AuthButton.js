/**
 * Created by vlad on 9/27/2016.
 */
import  React, {PropTypes} from 'react';

const AuthButton = ({title,  onClick}) => {
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
    onClick: PropTypes.func,
};

export default AuthButton;
