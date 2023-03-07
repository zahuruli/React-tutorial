import React, { useState } from 'react';
import style from './NewTodo.module.css';

const NewTodo = ({ onAddTodo }) => {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(todo);
        setTodo({ title: '', desc: '' });
    };
    return (
        <form action="" className={style.form} onSubmit={handleSubmit}>
            <div className={style['form-field']}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={title} onChange={handleChange} required />
            </div>
            <div className={style['form-field']}>
                <label htmlFor="desc">Desc:</label>
                <textarea name="desc" id="desc" value={desc} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;
