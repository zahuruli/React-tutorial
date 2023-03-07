import React, { useState } from 'react';
import { useFormik } from 'formik';

const Signup = () => {
    const formik = useFormik();
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('signed Up');
        console.log(user);
    };

    return (
        <div>
            <h2>User signup :</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleChange} />
                </div>

                <div>
                    <button>signup</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
