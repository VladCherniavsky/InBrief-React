import  React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <IndexLink to="/" activeClassName="active" className="item">Home</IndexLink>
                <Link to="/about" activeClassName="active" className="item">About</Link>
                <Link to="/courses" activeClassName="active" className="item">Courses</Link>

                {loading && <LoadingDots interval={100} dots={20}/>}

                <div className="right menu">
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
            <div className="ui segment">
                <p></p>
            </div>
        </div>
    );
};
Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export  default Header;
