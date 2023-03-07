import React, { Component, createRef } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = createRef();
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
        console.log(this.userNameRef.current.value);
        this.userNameRef.current.style.backgroundColor = 'green';
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-field">
                    <label htmlFor="userName">UserName:</label>
                    <input type="text" id="userName" name="username" ref={this.userNameRef} />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button>Register</button>
            </form>
        );
    }
}
