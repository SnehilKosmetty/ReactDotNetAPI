import React from 'react';
import { NavMenu } from './NavMenu';
import './Layout.css';

export function Layout({ children }) {
    return (
        <div className="layout-container">
            <NavMenu />
            <main className="content">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} ReactDotNetApp. All rights reserved.</p>
            </footer>
        </div>
    );
}