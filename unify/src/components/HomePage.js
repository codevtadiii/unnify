import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <h1>Welcome to UniFY</h1>
            <div className="homepage-options">
                <button onClick={() => navigate('/resources')} className="homepage-button">Resource Exchange</button>
                <button onClick={() => navigate('/discussions')} className="homepage-button">Open Discussions</button>
                <button onClick={() => navigate('/messages')} className="homepage-button">Your Messages</button>
                <button onClick={() => navigate('/contributors')} className="homepage-button">Top Contributors</button>
            </div>
        </div>
    );
};

export default HomePage;
