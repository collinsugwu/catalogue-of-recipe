import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryList from '../containers/CategoryList';
import Header from '../components/Header';

export default (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" component={CategoryList} />
        </Switch>
    </Router>
);