import React, { useState } from 'react';

const para = (
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consequatur blanditiis porro. Sequi possimus minima minus, iure nemo laboriosam animi, reprehenderit quis tenetur enim aut soluta
        corporis doloribus perferendis non.
    </p>
);

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div style={{ margin: '1rem', padding: '1rem', backgroundColor: 'pink' }}>
            <div>{toggle && para}</div>
            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={() => {
                        setToggle(!toggle);
                    }}>
                    {toggle ? 'Hide' : 'Show'}
                </button>
            </div>
        </div>
    );
};

export default Toggle;
