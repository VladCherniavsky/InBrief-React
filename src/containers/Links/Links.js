/**
 * Created by User on 3/27/2017.
 */
import React from 'react';
import LinksTable from '../../components/LinksTable/LinksTable';
import styles from './style.scss';

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
        selected: true
    },
    {
        name: 'Randal White',
        status: 'Unemployed'
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
        selected: true
    },
    {
        name: 'Steve Brown',
        status: 'Employed'
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed'
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed'
    },
    {
        name: 'Adam Moore',
        status: 'Employed'
    }
];

const columnNames = [
    {
        displayName: 'Id',
        name: 'id'
    },
    {
        displayName: 'Name',
        name: 'name'

    },
    {
        displayName: 'Status',
        name: 'status'
    }
];

class Links extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return(
        <div>
            <div className={styles.wrapper}>
                <h1>Links Table</h1>

                <LinksTable data={tableData}
                            columnNames={columnNames}>
                </LinksTable>
            </div>
        </div>
        );
    }
}


export default Links;
