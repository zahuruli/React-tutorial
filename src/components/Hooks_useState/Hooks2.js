import React, { useState } from 'react';

const Hooks2 = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Hooks2;
