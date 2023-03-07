import React, { useEffect, useState } from 'react';
import useFetchHook from './useFetchHook';

const Url = ' https://jsonplaceholder.typicode.com/todos';
const LoadingMessage = <p>Todo is Loading...</p>;

const CustomHooks = () => {
    const { isLoading, data, error } = useFetchHook(Url);

    return (
        <div>
            {isLoading && LoadingMessage}
            {error && <p>{error}</p>}
            {data &&
                data.map((todo) => {
                    return <p key={todo.id}>{todo.title}</p>;
                })}
        </div>
    );
};

export default CustomHooks;
