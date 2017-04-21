/**
 * Created by User on 4/14/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import stylesScss from './style.scss';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    marginTop: '12px'
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
                         <div>
                             <TextField
                                 hintText="Full width"
                                 fullWidth={true} >
                             </TextField>
                             <RaisedButton label="Primary"
                                           primary={true}
                                           style={style} >
                             </RaisedButton>
                         </div>

                     </div>
                </div>


            </div>
        );
    }
}


export default Home;
