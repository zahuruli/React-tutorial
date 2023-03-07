import React from 'react';
import Todo from './Todo';

const Todos = ({ todos }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo todo={todo} key={index} />
            ))}
        </div>
    );
};

export default Todos;
