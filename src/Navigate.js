import React from 'react';
import { Link } from 'react-router-dom';

function Navigate() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigate;
