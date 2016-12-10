import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/games/ttt">Game tic-tac-toe</Link>
                    </li>
                </ul>
                { this.props.children }
            </div>
        );
    }
});