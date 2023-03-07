import React from 'react';
import MyTodo from './MyTodo';

const Todos = ({ todos }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <MyTodo todo={todo} key={index} />
            ))}
        </div>
    );
};

export default Todos;
