import '../sass/common.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';

import routes from './routes/routes';

// ========================================

ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('container')
);


