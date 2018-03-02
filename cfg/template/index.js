import {Router, Route,IndexRoute, hashHistory } from 'react-router';
import AppRoot from './AppRoot';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppRoot}>
        </Route>
    </Router>
, document.getElementById('app'));
