import React, { createContext, useState } from 'react';
import Components2 from './Components2';
import { UserContext } from './UserContext';

const Components1 = () => {
    const [user, setUser] = useState({ id: 1, name: 'zahurul islam' });
    const [text, setText] = useState('Hello i am text');

    return (
        <UserContext.Provider value={{ user, text }}>
            <Components2 />
        </UserContext.Provider>
    );
};

export default Components1;
