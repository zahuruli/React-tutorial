import React from 'react';
import propTypes from 'prop-types';

const Users = ({ user }) => {
    return (
        <div>
            <h2>{user.id}</h2>
            <h3>{user.name}</h3>
        </div>
    );
};

Users.propTypes = {
    user: propTypes.shape({
        id: propTypes.number,
        name: propTypes.string
    })
};

export default Users;
