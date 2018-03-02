import {Router, Route,IndexRoute, hashHistory } from 'react-router';
import AppRoot from './AppRoot';
import Landing from './pages/landing/index';
import PolicyFilter from './components/PolicyFilter';
import "./styles/App.css";
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppRoot}>
            <IndexRoute component={Landing} />
            <Route path="home"
                   getComponent={
                       (nextState,callback)=>{
                           require.ensure([],(require)=>{
                               callback(null,require("./pages/home/index"))
                           },"home")
                       }}
            />
            <Route path="quote" >
                <Route path="location">
                    <Route path="basic" onEnter={PolicyFilter}
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("./pages/quote/location/basic"))
                                   },"quoteLocationBasic")
                               }}
                    />
                    <Route path="rate" onEnter={PolicyFilter}
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("./pages/quote/location/rate"))
                                   },"quoteLocationRate")
                               }}
                    />
                    <Route path="address" onEnter={PolicyFilter}
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("./pages/quote/location/address"))
                                   },"quoteLocationAddress")
                               }}
                    />
                    <Route path="coverage" onEnter={PolicyFilter}
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("./pages/quote/location/coverage"))
                                   },"quoteLocationCoverage")
                               }}
                    />
                    <Route path="pay" onEnter={PolicyFilter}
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("./pages/quote/location/pay"))
                                   },"quoteLocationPay")
                               }}
                    />

                    <Route path="issue"
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("./pages/quote/location/issue"))
                                   },"quoteLocationIssue")
                               }}
                    />

                </Route>
            </Route>
            <Route path="policy">
                <Route path="search"
                       getComponent={
                           (nextState,callback)=>{
                               require.ensure([],(require)=>{
                                   callback(null,require("./pages/policy/search"))
                               },"policySearch")
                           }}
                />
                <Route path="detail"
                       getComponent={
                           (nextState,callback)=>{
                               require.ensure([],(require)=>{
                                   callback(null,require("./pages/policy/detail"))
                               },"policyDetail")
                           }}
                />
            </Route>
            <Route path="product">
                <Route path="list"
                       getComponent={
                           (nextState,callback)=>{
                               require.ensure([],(require)=>{
                                   callback(null,require("./pages/product/list"))
                               },"productList")
                           }}
                />
            </Route>
        </Route>
    </Router>
    , document.getElementById('app'));