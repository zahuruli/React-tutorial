import React, { useState, useEffect } from 'react';
import './Dynamic.css';

const Dynamic = () => {
    const [name, setName] = useState('');
    const [ValidInput, setValidInput] = useState(false);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    useEffect(() => {
        if (name.length < 2) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    }, [name]);

    return (
        <div>
            <input type="text" className={`${ValidInput ? 'valid' : 'invalid'}`} value={name} onChange={handleChange} />
        </div>
    );
};

export default Dynamic;
