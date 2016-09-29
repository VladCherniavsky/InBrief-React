import  React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import AuthButton from './AuthButton'

const Header = ({loading, logout, login, isLogged}) => {
    return (
        <div>
            <div className="ui secondary pointing menu">

                <IndexLink to="/home" activeClassName="active" className="item">Home</IndexLink>
                <Link to="/about" activeClassName="active" className="item">About</Link>
                {isLogged && <Link to="/courses" activeClassName="active" className="item">Courses</Link>}


                {loading && <LoadingDots interval={100} dots={20}/>}

                {isLogged
                    ? <AuthButton title="Logout" onClick={logout}/>
                    : <AuthButton title="Login" onClick={login}/>}
            </div>
            <div className="ui segment">
                <p></p>
            </div>
        </div>
    );
};
Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    logout: PropTypes.func,
    isLogged: PropTypes.bool,
    login: PropTypes.func
};

export  default Header;
