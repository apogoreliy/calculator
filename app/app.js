import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'
import {IntlProvider} from 'react-intl';
import rootReducer from './reducers';

import HandleApp from './containers/HandleApp';
import WelcomePage from './components/WelcomePage';
import RequireAuth from './containers/RequireAuth';
import CheckAuth from './containers/CheckAuth';

import CostsPage from './components/costs/CostsPage';
import JobsPage from './components/jobs/JobsPage';
import HandlePlacesPage from './containers/HandlePlacesPage';
import WorkersPage from './components/workers/WorkersPage';
import HandleClientsPage from './containers/HandleClientsPage';

//import Perf from 'react-addons-perf';

require("../styles/bootstrap.min.css");
require("../styles/style.css");
require('react-datepicker/dist/react-datepicker.css');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// put window.store here to get an access to a store from utils/services.js/isTypeExist
window.store = store;

//Perf.start();
render(
    <IntlProvider locale="en">
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={CheckAuth(HandleApp)}>
                    <IndexRoute component={WelcomePage} />
                    <Route path="costs" component={RequireAuth(CostsPage)} />
                    <Route path="jobs" component={RequireAuth(JobsPage)} />
                    <Route path="places" component={RequireAuth(HandlePlacesPage)} />
                    <Route path="workers" component={RequireAuth(WorkersPage)} />
                    <Route path="clients" component={RequireAuth(HandleClientsPage)} />
                </Route>
            </Router>
        </Provider>
    </IntlProvider>, document.getElementById('app')
);
//Perf.stop();
//Perf.printInclusive();
//Perf.printWasted();