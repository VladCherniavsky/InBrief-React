/**
 * Created by vlad on 3/31/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
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

    render() {
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
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
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
                                        {
                                            row[item.name]
                                                ?row[item.name]
                                                : index
                                        }
                                    </TableRowColumn>
                                ))}
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
    columnNames: PropTypes.array
};

export default LinksTable;
