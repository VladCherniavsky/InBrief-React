/**
 * Created by User on 3/27/2017.
 */
import React from 'react';
import LinksTable from '../../components/LinksTable/LinksTable';

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {slideIndex: 0};
    }

    render() {
        return(
            <div>
                <h1>Links Table</h1>
                <LinksTable></LinksTable>
            </div>
        );
    }
}


export default Links;
