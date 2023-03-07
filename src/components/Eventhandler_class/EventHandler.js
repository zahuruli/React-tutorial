import React, { Component } from 'react';

export default class EventHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changedValue: ''
        };
    }

    changeHandler = (e) => {
        this.setState(
            {
                changedValue: e.target.value
            },
            () => {
                console.log(this.state.changedValue);
            }
        );
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeHandler} />
                <p>{this.state.changedValue}</p>
            </div>
        );
    }
}
