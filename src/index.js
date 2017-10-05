import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import CompletedTodos from './components/completedtodos';

import registerServiceWorker from './registerServiceWorker';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/completed" component={CompletedTodos} />
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
