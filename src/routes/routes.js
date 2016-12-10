import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import Games from '../containers/Games';
import Game from '../containers/Game';
import About from '../containers/About';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/games" component={Games}>
            <Route path="/games/:gameName" component={Game} />
        </Route>
        <Route path="/about" component={About} />
    </Route>
);
