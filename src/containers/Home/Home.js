/**
 * Created by User on 4/14/2017.
 */
import React from 'react';
import stylesScss from './style.scss';
import InputButton from '../../components/InputButton/InputButton';

import {deepPurple800} from 'material-ui/styles/colors';

const style = {
    button: {
        marginLeft: '3px'
    },
    underlineStyle: {
        borderColor: deepPurple800
    },
    buttonStyle: {
        backgroundColor: deepPurple800
    }

};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={stylesScss.wrapper}>
                <div className={stylesScss.mainContent}>
                     <div className={stylesScss.alignTop}>
                         <div className={stylesScss.centered}>
                             <InputButton style={style}
                                          buttonLabelText="Get Short Link"
                                          placeHolder="Enter URL"/>
                         </div>

                     </div>
                </div>


            </div>
        );
    }
}


export default Home;
