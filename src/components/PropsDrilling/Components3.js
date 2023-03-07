import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Components3 = () => {
    const { user, text } = useContext(UserContext);
    return (
        <div>
            <h2>{text}</h2>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
        </div>
    );
};

export default Components3;
