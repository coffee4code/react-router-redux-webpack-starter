import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div className="app">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/games">Games</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                { this.props.children }
            </div>
        );
    }
});