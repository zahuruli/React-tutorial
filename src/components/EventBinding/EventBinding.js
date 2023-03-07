import React, { Component } from 'react';

export default class EventBinding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick.bind(this)}>increase</button>
            </div>
        );
    }
}
