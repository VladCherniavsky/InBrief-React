/**
 * Created by User on 5/6/2017.
 */
import React from 'react';
import Chip from 'material-ui/Chip';

const Chipp = class ChipComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {chipData: [
            {key: 0, label: 'Angular'},
            {key: 1, label: 'JQuery'},
            {key: 2, label: 'Polymer'},
            {key: 3, label: 'ReactJS'}
        ]};
        this.styles = {
            chip: {
                margin: 4
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap'
            }
        };
    }

    handleRequestDelete(key) {
        if (key === 3) {
            return;
        }

        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({chipData: this.chipData});
    }

    handleRequestAdd(data) {
        const chipDataLength = this.state.chipData.length;
        const chipdata = [
            ...this.state.chipData,
            {key: chipDataLength, label: data}
            ];

        this.setState({chipData: chipdata});
    }


    renderChip(data) {
        return (
            <Chip
                key={data.key}
                onRequestDelete={() => ::this.handleRequestDelete(data.key)}
                style={this.styles.chip}>
                {data.label}
            </Chip>
        );
    }

    render() {
        return (
            <div style={this.styles.wrapper}>
                {this.state.chipData.map(::this.renderChip, this)}
            </div>
        );
    }
};


export default Chipp;
