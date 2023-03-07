import React from 'react';
import Todo from './Todo';
import style from './Todos.module.css';

const Todos = ({ todos, onRemoveTodo }) => {
    console.log(todos);
    return (
        <section className={style.todos}>
            {todos.map((todo) => (
                <Todo todo={todo.data} key={todo.id} id={todo.id} onRemoveTodo={onRemoveTodo} />
            ))}
        </section>
    );
};

export default Todos;
