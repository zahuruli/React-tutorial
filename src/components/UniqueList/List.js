import React from 'react';

import { v4 as uuidv4 } from 'uuid';

let Todos = [
    {
        title: 'Title 1',
        desc: 'This is desc 1 '
    },
    {
        title: 'Title 2',
        desc: 'This is desc 2'
    },
    {
        title: 'Title 3',
        desc: 'This is desc 3'
    },
    {
        title: 'Title 4',
        desc: 'This is desc 4'
    }
];

const List = () => {
    return (
        <div>
            {Todos.map((todo) => {
                const { title, desc } = todo;

                return (
                    <div key={uuidv4()}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
