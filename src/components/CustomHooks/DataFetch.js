import React from 'react';
import CustomHooks from './customHooks';

const Url = 'https://jsonplaceholder.typicode.com/todos';
const LoadingMessage = <p>Data is Loading...</p>;
const DataFetch = () => {
    const { isLoading, datas, error } = CustomHooks(Url);

    return (
        <div>
            {isLoading && LoadingMessage}
            {error && error}
            {datas &&
                datas.map((data) => {
                    return <p key={data.id}>{data.title}</p>;
                })}
        </div>
    );
};

export default DataFetch;
