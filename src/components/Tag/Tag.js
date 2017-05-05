/**
 * Created by User on 5/5/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import syleScss from './style.scss';

const Tag = (props) => {
    const {tag} = props;
    return (
        <a className={syleScss.tag}>{'#' + tag}</a>
    );
};
Tag.propTypes = {
    tag: PropTypes.string.isRequired
};
export default Tag;
