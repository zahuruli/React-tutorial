import React, { useState } from 'react';
import style from './form.module.css';

const Form = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Submitted');
        console.log(user);
    };

    return (
        <div>
            <h1>Registration Form :</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formDiv}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} required />
                </div>
                <div className={style.formDiv}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
                </div>
                <div className={style.formDiv}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
                </div>

                <div className={style.formbtn}>
                    <button type="submit" className={style.btn}>
                        Register
                    </button>
                </div>
                <div className={style.formbtn}>
                    <button type="reset" className={style.btn}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
