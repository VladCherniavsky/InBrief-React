/**
 * Created by User on 5/5/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import syleScss from './style.scss';

const Tag = (props) => {
    const {tag, onClick, numberSign} = props;
    return (
        <a className={syleScss.tag}
           onTouchTap={onClick}>{
            (numberSign ? '#' : '') + tag
           }
        </a>
    );
};
Tag.propTypes = {
    tag: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    numberSign: PropTypes.bool
};
export default Tag;
