import React from 'react';

export const Child = ({ data, onChildData }) => {
    const Cdata = 'Hello i am from child Data';
    onChildData(Cdata);
    return (
        <div>
            <h2>{data}</h2>
        </div>
    );
};
