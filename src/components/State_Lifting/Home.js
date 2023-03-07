import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const DummyTodos = ['todo1', 'todo2'];
const Home = () => {
    const [todos, setTodos] = useState(DummyTodos);

    const HandleNewTodo = (data) => {
        setTodos([...todos, data]);
    };

    return (
        <div>
            <NewTodo onAddTodo={HandleNewTodo} />
            <Todos todos={todos} />
        </div>
    );
};

export default Home;
