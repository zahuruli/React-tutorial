import React, { useEffect, useState } from 'react';
const Url = 'https://jsonplaceholder.typicode.com/todo';

const LoadingMessage = <p>Todo is Loading...</p>;

const DataFatch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIslLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(Url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Fetching is not successful');
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setTodos(data);
                    setIslLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.message);
                    setIslLoading(false);
                });
        }, 1000);
    }, []);

    const todosElement =
        todos &&
        todos.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
        });

    return (
        <div>
            <h2>Todos</h2>
            <div>
                {isLoading && LoadingMessage}
                {error && <p>{error}</p>}
                {todosElement}
            </div>
        </div>
    );
};

export default DataFatch;
