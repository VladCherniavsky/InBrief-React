/**
 * Created by User on 3/27/2017.
 */
import React from 'react';
import LinksTable from '../../components/LinksTable/LinksTable';
import Chip from '../../components/Chip';
import ConfirmWindow from '../../components/ConfirmWindow';
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
        console.log('ConfirmWindow', this.refs.confirmWindow.handleOpen('Delete', 'Are you sure?'));
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
    filter(data, filterVal) {
        return () => {
            ::this.addFilter(filterVal);
            this.props.actions.boundGetLinks(data);
        };
    }

    addFilter(data) {
        this.refs.chip.handleRequestAdd(data);
    }

    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1>Links Table</h1>
                <ConfirmWindow ref="confirmWindow"/>
                <Chip ref="chip"></Chip>
                <LinksTable data={::this.mapData()}
                            updateTable={::this.updateTable}
                            onClickFilter={::this.filter}
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
