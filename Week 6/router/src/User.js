import React from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
    let { username } = useParams();

    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome, {username}!</p>
        </div>
    );
};

export default User;