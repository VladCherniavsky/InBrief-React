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
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import TrashIcon from 'material-ui/svg-icons/action/delete-forever';
import IconButton from 'material-ui/IconButton';

const columnNames = [
    {
        displayName: 'Link',
        name: 'link'

    },
    {
        displayName: 'Short Link',
        name: 'shortLink'
    },
    {
        displayName: 'Clicks',
        name: 'clicks'
    },
    {
        displayName: 'Actions',
        name: 'actions'
    }
];
const aa= <div>
    <IconButton><ModeEditIcon/></IconButton>
    <IconButton><TrashIcon/></IconButton>
</div>;

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

    mapLinks() {
        return this.state.links.map((item) => {
            item.actions = aa;
            return item;
        });
    }

    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1>Links Table</h1>
                <LinksTable data={::this.mapLinks()}
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
