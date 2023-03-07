import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BootStrap = () => {
    return (
        <div>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    <h1>Card Title</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis atque rerum ratione veritatis fugiat autem harum at porro culpa! Saepe quam magnam sapiente temporibus eligendi?
                    </p>
                    <Button variant="success">Save</Button>
                </Card>
            </div>
        </div>
    );
};

export default BootStrap;
