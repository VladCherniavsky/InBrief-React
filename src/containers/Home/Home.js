/**
 * Created by User on 4/14/2017.
 */
import React from 'react';
import stylesScss from './style.scss';
import InputButton from '../../components/InputButton/InputButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boundLinkActionCreators
    from '../../actions/bound_action_creators/link';
import {deepPurple800} from 'material-ui/styles/colors';
import toastr from 'toastr';

const style = {
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
        this.state = {link: ''};
    }

    getShortLink() {
        this.props.actions.boundAddLink({link: this.state.link});
    }
    handleChange(event) {
        this.setState({link: event.target.value});
    }
    componentWillReceiveProps(nextProps) {
        this.setState({link: ''});
        if(nextProps.createdLink) {
            toastr.success('Link saved', 'Ok');
        }
        if(nextProps.error) {
            toastr.error(nextProps.error.errmsg, 'Opps');
        }
    }

    render() {
        return(
            <div className={stylesScss.wrapper}>
                <div className={stylesScss.mainContent}>
                     <div className={stylesScss.alignTop}>
                         <div className={stylesScss.centered}>
                             <InputButton style={style}
                                          inputValue={this.state.link}
                                          onChange={::this.handleChange}
                                          onClick={::this.getShortLink}
                                          buttonLabelText="Get Short Link"
                                          placeHolder="Enter URL"/>
                         </div>

                     </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    createdLink: state.LinkReducer.link,
    error: state.LinkReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...boundLinkActionCreators
    }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
