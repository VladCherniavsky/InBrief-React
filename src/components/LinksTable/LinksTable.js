/**
 * Created by vlad on 3/31/2017.
 */
import React from 'react';
import ActionButtons from '../ActionButtons';
import PropTypes from 'prop-types';
import Tag from '../../components/Tag';
import {Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
}
    from 'material-ui/Table';


const LinksTable = class TableExampleComplex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false
        };
    }

    renderTableHeaders(headers) {
        return headers.map((header, index) => (

            <TableHeaderColumn key={index}>
                {header.displayName}
            </TableHeaderColumn>

        ));
    }

    onShortLinkClick(name) {
        return () => (
            name == 'shortLink'
                ? this.props.updateTable()
                : null
        );
    }

    renderData(row, item) {
        if(item.isLink) {
            return (
                <a target="_blank"
                   href={row[item.name]}
                   onTouchTap={::this.onShortLinkClick(item.name)}>
                    {row[item.name]}
                </a>
            );
        } else {
            return row[item.name];
        }
    }

    render() {
        const {onClickFilter} = this.props;
        return (
            <div>
                <Table
                    height={this.state.height}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}>

                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}>

                        <TableRow>
                            {::this.renderTableHeaders(this.props.columnNames)}
                            <TableHeaderColumn>User's Email</TableHeaderColumn>
                            <TableHeaderColumn>Tags</TableHeaderColumn>
                            <TableHeaderColumn>Actions</TableHeaderColumn>


                        </TableRow>

                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}>
                        {this.props.data.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                {this.props.columnNames.map((item, ind) => (
                                    <TableRowColumn key={ind}>
                                        {::this.renderData(row, item)}
                                    </TableRowColumn>
                                ))}
                                <TableRowColumn>
                                    <Tag tag={row.userId.email}
                                         onClick={onClickFilter({
                                             userId: row.userId._id
                                         }, row.userId.email) }>
                                    </Tag>
                                </TableRowColumn>

                                <TableRowColumn>
                                    {row.tags.map((tag, i) => (
                                        <Tag key={i}
                                             numberSign={true}
                                             tag={tag}
                                             onClick={onClickFilter({
                                                 tag: tag
                                             })}/>
                                    ))}
                                </TableRowColumn>
                                <TableRowColumn>
                                    <ActionButtons />
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>


            </div>
        );
    }
};

LinksTable.propTypes = {
    data: PropTypes.array,
    columnNames: PropTypes.array,
    updateTable: PropTypes.func,
    onClickFilter: PropTypes.func
};

export default LinksTable;
