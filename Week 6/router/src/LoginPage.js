import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    let navigation = useNavigate();
    let location = useLocation();
    let state = location.state;
    let from = state?.from?.pathname ? state.from.pathname : "/";
    let text = '';
    if (from !== '/') text = <h3>You must be logged in to view {from}</h3>
    const handleLogin = () => {
        props.onClick(from, navigation);
    };

    return (
        <div>
            {text}
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
};

export default LoginPage;