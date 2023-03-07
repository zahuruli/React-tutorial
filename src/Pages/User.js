import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState();
    const [age, setAge] = useState();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, age: age });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Name" onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                />

                <button type="submit">Find user</button>
            </form>

            {/* <h2>{searchParams.get('id')}</h2>
            <h2>{searchParams.get('age')}</h2>
            <h2>{searchParams.get('name')}</h2> */}
        </div>
    );
};

export default User;
