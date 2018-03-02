import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
// importing combined reducers
import reducers from './reducers/index';
import AssetManagement from './components/pages/assetManagement';
import Main from './main';

const logger = createLogger();
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk, logger)
));

// Router wraps all components and track by browserHistory
// Route Main contains the parent component including header, children componenets and footer.
const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={AssetManagement} />
                <Route path="/assets" component={AssetManagement} />
            </Route>
        </Router>
    </Provider>
);
// Connecting our react application to store through Provider by passing store as a props.
render(
    Routes, document.getElementById('app')
);
