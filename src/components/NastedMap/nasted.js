import React from 'react';

const users = [
    {
        fullname: 'zahurul islam',
        age: 25,
        phone: [{ home: '01710' }, { office: '01718' }]
    },
    {
        fullname: 'Jahangir islam',
        age: 29,
        phone: [
            {
                home: {
                    num1: '00000',
                    num2: '1111'
                }
            },
            { office: '01719' }
        ]
    }
];

export const Nasted = () => {
    return (
        <div>
            <h1>Nasted Lists</h1>
            {users.map((user, index) => (
                <article key={index}>
                    <h2>{user.fullname}</h2>
                    <h3>{user.age}</h3>
                    <p>{user.phone[0].home.num2}</p>
                    <p>{user.phone[1].office}</p>
                </article>
            ))}
        </div>
    );
};
