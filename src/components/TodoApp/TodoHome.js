import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import style from './TodoHome.module.css';
import NewTodo from './NewTodo';

const TodoHome = () => {
    const [todos, setTodos] = useState([]);

    const HandleTodo = (data) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), data }];
        });
    };

    const HandleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
            return filteredTodos;
        });
    };

    return (
        <div className={style.container}>
            <h1 className={style.homeHeading}>Todo App</h1>
            <NewTodo onAddTodo={HandleTodo} />
            <Todos todos={todos} onRemoveTodo={HandleRemoveTodo} />
        </div>
    );
};

export default TodoHome;
