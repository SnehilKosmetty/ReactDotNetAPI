import React from 'react';
import './Home.css';

export function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to React with .NET</h1>
            <p>This is a sample application demonstrating React with .NET integration.</p>
            <div className="features">
                <div className="feature-card">
                    <h3>React Frontend</h3>
                    <p>Modern UI built with React components</p>
                </div>
                <div className="feature-card">
                    <h3>.NET Backend</h3>
                    <p>Powerful API services with ASP.NET Core</p>
                </div>
                <div className="feature-card">
                    <h3>Responsive Design</h3>
                    <p>Adapts to different screen sizes</p>
                </div>
            </div>
        </div>
    );
}