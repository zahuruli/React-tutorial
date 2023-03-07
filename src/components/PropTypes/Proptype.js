import React, { useState } from 'react';
import Users from './Users';

const Proptype = () => {
    const [user, setUser] = useState({
        id: 1603021,
        name: 'zahurul islam'
    });

    return (
        <div>
            <Users user={user} />
        </div>
    );
};

export default Proptype;
