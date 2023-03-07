import React from 'react';
import style from './Todo.module.css';

const Todo = ({ todo, id, onRemoveTodo }) => {
    const { title, desc } = todo;
    const HandleClick = (id) => {
        onRemoveTodo(id);
    };

    return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button
                    className={style.btn}
                    onClick={() => {
                        HandleClick(id);
                    }}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;
