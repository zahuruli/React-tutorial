import React, { Component } from 'react';

export default class Card1 extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}
