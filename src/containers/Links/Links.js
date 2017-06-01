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
        this.state = {
            links: [],
            filter: {
                userId: [],
                tag: []
            }
        };
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
        // console.log('ConfirmWindow', this.refs.confirmWindow.handleOpen('Delete', 'Are you sure?'));
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

            const key = Object.keys(data)[0];
            if(Object.keys(data).length > 0) {

                if(!this.state.filter[key].includes(data[key])) {
                    const filter = {
                        ...this.state.filter
                    };
                    filter[key].push(data[key]);

                    this.setState({filter: filter});

                    console.log('filter', this.state.filter);

                }
            }
            const itemChip = {
                label: filterVal,
                value: data[key],
                propName: key
            };
            ::this.addFilter(itemChip);
        };
    }
    onClickInfo(linkId) {
        return () => {
        };
    }
    onClickEdit(linkId) {
        return () => {
        };
    }
    onClickDelete(linkId) {
        return () => {
            this.refs.confirmWindow.handleOpen('Delete', 'Are you sure?');
        };
    }

    addFilter(data) {
        data
            ? this.refs.chip.handleRequestAdd(data)
            : null;
    }
    removeItemFromChip(data) {
        console.log('data', data);
        console.log('this.state.filter', this.state.filter);
    }

    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1>Links Table</h1>
                <ConfirmWindow ref="confirmWindow"/>
                <Chip ref="chip"
                      removeItem={::this.removeItemFromChip}>
                </Chip>
                <LinksTable data={::this.mapData()}
                            updateTable={::this.updateTable}
                            onClickFilter={::this.filter}
                            onClickInfo={::this.onClickInfo}
                            onClickEdit={::this.onClickEdit}
                            onClickDelete={::this.onClickDelete}
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
