import React, { useState } from 'react';

import './Faq.css';

const Faq = ({ id, title, desc }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <article className="faq">
            <div className="upper">
                <h3>{title}</h3>
                <button
                    onClick={() => {
                        setToggle(!toggle);
                    }}>
                    {toggle ? '-' : '+'}
                </button>
            </div>
            <p>{toggle && desc}</p>
        </article>
    );
};

export default Faq;
