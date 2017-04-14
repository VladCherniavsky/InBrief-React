/**
 * Created by User on 4/14/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import stylesScss from './style.scss';
import colors from '../../components/common/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {
    blue500,
    grey50,
    grey500
} from 'material-ui/styles/colors';

const styles = {
    hintStyle: {
        color: grey500
    },
    underlineStyle: {
        borderColor: blue500
    },
    floatingLabelStyle: {
        color: grey50
    },
    floatingLabelFocusStyle: {
        color: blue500
    },
    button: {
        color: colors.$white
    },
    input: {
        color: colors.$white
    }
};
const style = {
    margin: 12,
};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={stylesScss.wrapper}>
                <h1>Hello</h1>

            </div>
        );
    }
}


export default Home;
