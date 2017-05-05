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
import {addHostToLink} from '../../services/helper';

const columnNames = [
    {
        displayName: 'Link',
        name: 'link',
        isLink: true

    },
    {
        displayName: 'Short Link',
        name: 'shortLink',
        isLink: true
    },
    {
        displayName: 'Clicks',
        name: 'clicks'
    }
];

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links: []};
    }

    updateTable() {
       setTimeout(() => {
            this.props.actions.boundGetLinks();
        }, 300);
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
    mapData() {
        return this.state.links.map((item) => {
            item.shortLink = addHostToLink(item.shortLink);
            return item;
        });
    }

    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1>Links Table</h1>
                <LinksTable data={::this.mapData()}
                            updateTable={::this.updateTable}
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
