import React, { useState } from 'react';

const NewTodo = ({ onAddTodo }) => {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(todo);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input type="text" id="todo" name="todo" value={todo} onChange={handleChange} />
                <button type="submit">Added todo</button>
            </form>
        </div>
    );
};

export default NewTodo;
