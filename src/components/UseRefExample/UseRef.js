import React, { useRef } from 'react';

const UseRef = () => {
    const userNameRef = useRef();
    const passwordref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = userNameRef.current.value;
        const password = passwordref.current.value;
        console.log({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="userName">UserName:</label>
                <input type="text" id="userName" name="username" ref={userNameRef} />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" ref={passwordref} />
            </div>
            <button>Register</button>
        </form>
    );
};

export default UseRef;
