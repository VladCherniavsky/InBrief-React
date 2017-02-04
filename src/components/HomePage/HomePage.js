import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>InBrief  Home page</h1>
                <Link to="/short/about" className="btn btn-primary btn-lg">
                    About
                </Link>
                <MuiThemeProvider muiTheme={muiTheme}>

                    <div>
                        <AppBar
                            title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <Paper style={style}>
                            <Menu>
                                <MenuItem primaryText="Maps" />
                                <MenuItem primaryText="Books" />
                                <MenuItem primaryText="Flights" />
                                <MenuItem primaryText="Apps" />
                            </Menu>
                        </Paper>
                        <Paper style={style}>
                            <Menu>
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help &amp; feedback" />
                                <MenuItem primaryText="Settings" />
                                <MenuItem primaryText="Sign out" />
                            </Menu>
                        </Paper>
                    </div>
                </MuiThemeProvider>

            </div>
        );
    }
}

export default HomePage;
