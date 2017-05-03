/**
 * Created by User on 5/2/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';
import IconButton from 'material-ui/IconButton';
import {deepPurple800} from 'material-ui/styles/colors';
import styleScss from './style.scss';
import copy from 'copy-to-clipboard';
import toastr from 'toastr';


const ShortedLink = (props) => {
    const {shortedLink} = props;

    const handleTouchTap = (event) => {
        if(shortedLink) {
            copy(shortedLink);
            toastr.success('Copied');
        }
    };
    return (
        <div>
            <a href={shortedLink}
               className={styleScss.link}
               target="_blank">{shortedLink}
            </a>
            <IconButton tooltip="Copy"
                        touch={true}
                        tooltipPosition="top-right" onClick={handleTouchTap}>
                <ContentCopyIcon color={deepPurple800}></ContentCopyIcon>
            </IconButton>
        </div>
    );
};
ShortedLink.propTypes = {
    shortedLink: PropTypes.string
};

export default ShortedLink;
