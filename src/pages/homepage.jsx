import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();

    const user = location.state?.profile;

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    if (!user) { return null;}
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome, {user.name}!</h2>
            <img src={user.picture } alt="Profile" />
            <p>Email: {user.email}</p>  

            <button onClick={() => navigate('/')} >
                Logout
            </button>
        </div>
    )
}

export default HomePage