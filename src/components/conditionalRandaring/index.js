import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default class Crandaring extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogedIn: true
        };
    }

    render() {
        const { isLogedIn } = this.state;
        let element = isLogedIn ? <HomePage /> : <LoginPage />;
        return <div>{element}</div>;
    }
}
