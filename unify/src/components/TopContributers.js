import React from 'react';
import './styles/TopContributers.css';

const TopContributors = () => {
    return (
        <section className="top-contributors">
            <h2>Top Contributors</h2>
            <div className="contributors-grid">
                <div className="contributor-card">
                    <img src="path/to/sample-avatar.jpg" alt="Contributor" />
                    <h3>Contributor Name</h3>
                    <span>Badge: Contributor Badge</span>
                </div>
            
            </div>
            <button>See All Contributors</button>
        </section>
    );
};

export default TopContributors;
