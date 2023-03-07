import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolores? Dicta amet, aliquid obcaecati deleniti tenetur error!</p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facilis praesentium vel voluptatem quos neque voluptatum, tempore iste, temporibus inventore accusamus? Cumque
                similique quod, dicta sunt quasi voluptatibus eveniet, veritatis a quam quo maxime. Expedita magnam similique ratione perferendis fuga odio architecto error quaerat. Vitae deleniti
                minima dolor quis repellat.
            </p>
            <button
                onClick={() => {
                    Navigate('/');
                }}>
                Back to Home
            </button>
        </div>
    );
};

export default Contact;
