import React, { useState } from 'react';

const NewTodo = ({ onAddTodos }) => {
    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        onAddTodos(todo);
    };

    return (
        <div>
            <form action="" onSubmit={HandleSubmit}>
                <label htmlFor="todo">Todo :</label>
                <input type="text" name="todo" id="todo" value={todo} onChange={handleChange} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;
