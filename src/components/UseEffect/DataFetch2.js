import React, { useEffect, useState } from 'react';

const Url = ' https://jsonplaceholder.typicode.com/todos';
const LoadingMessage = <p>Todo is Loading...</p>;

const DataFetch2 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(Url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Fatching is Not Successful');
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setTodos(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 1000);
    }, []);

    return (
        <div>
            {isLoading && LoadingMessage}
            {error && <p>{error}</p>}
            {todos &&
                todos.map((todo) => {
                    return <p key={todo.id}>{todo.title}</p>;
                })}
        </div>
    );
};

export default DataFetch2;
