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
import toastr from '../../services/toastr';
import ShortedLink from '../../components/ShortedLink';
import {addHostToLink} from '../../services/helper';


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
        this.state = {link: '', shortedLink: ''};
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
            if(this.state.shortedLink !== nextProps.createdLink.shortLink) {
                this.setState({
                    link: '',
                    shortedLink: nextProps.createdLink.shortLink
                });
                toastr.success('Link saved', 'Ok');
            }
        }
        if(nextProps.error) {
            const error = nextProps.error;
            toastr.error(error.errmsg || error.message, 'Opps');
        }
    }
    componentWillUnmount() {
        this.props.actions.boundClearLink();
    }
    formatLink() {
        return addHostToLink(this.props.createdLink.shortLink);
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
                            <div className={stylesScss.shortedLinkBlock}>
                                {
                                    this.props.createdLink
                                    && <ShortedLink shortedLink={
                                        ::this.formatLink()
                                    } />
                                }
                            </div>
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
