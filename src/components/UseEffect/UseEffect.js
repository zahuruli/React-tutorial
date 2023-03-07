import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    const HandleClick = () => {
        setCount((count) => count + 1);
    };

    useEffect(() => {
        console.log('useEffect');
    }, [count]);

    return (
        <div>
            {console.log('Rendering')}
            <h2>Count : {count}</h2>
            <button onClick={HandleClick}>Increment</button>
        </div>
    );
};

export default UseEffect;
