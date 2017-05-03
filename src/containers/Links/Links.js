/**
 * Created by User on 3/27/2017.
 */
import React from 'react';
import LinksTable from '../../components/LinksTable/LinksTable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boundLinkActionCreators
    from '../../actions/bound_action_creators/link';
import styles from './style.scss';

const columnNames = [
    {
        displayName: 'Id',
        name: 'id'
    },
    {
        displayName: 'Link',
        name: 'link'

    },
    {
        displayName: 'Short Link',
        name: 'shortLink'
    }
];

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links: []};
    }

    componentWillMount() {
        this.props.actions.boundGetLinks();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            links: nextProps.links.data,
            count: nextProps.links.count
        });
    }

    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1>Links Table</h1>
                <LinksTable data={this.state.links}
                            columnNames={columnNames}>
                </LinksTable>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    links: state.LinkReducer.links,
    error: state.LinkReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...boundLinkActionCreators
    }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Links);
