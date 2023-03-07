import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const DummyTodos = ['todo1', 'todo2', 'todo3'];

const Home = () => {
    const [todos, setTodos] = useState(DummyTodos);
    const handleTodos = (Data) => {
        setTodos([...todos, Data]);
    };
    return (
        <div>
            <NewTodo onAddTodos={handleTodos} />
            <Todos todos={todos} />
        </div>
    );
};

export default Home;
