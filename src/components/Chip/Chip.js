/**
 * Created by User on 5/6/2017.
 */
import React from 'react';
import Chip from 'material-ui/Chip';

const Chipp = class ChipComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {chipData: [
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
        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.props.removeItem(this.chipData[chipToDelete]);
        this.chipData.splice(chipToDelete, 1);
        this.setState({chipData: this.chipData});
    }

    handleRequestAdd(data) {
        if(data) {
            const dataExist = this.state.chipData.filter((item) => {
                return item.label === data.label;
            });
            if(!(dataExist.length > 0)) {
                const chipDataLength = this.state.chipData.length;
                const chipdata = [
                    ...this.state.chipData,
                    {
                        key: chipDataLength,
                        label: data.label,
                        propName: data.propName,
                        value: data.value
                    }
                ];

                this.setState({chipData: chipdata});
            }
        }
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
