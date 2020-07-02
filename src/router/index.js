import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryList from '../containers/CategoryList';
import Header from '../components/Header';

export default (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/search/:ingredient">
                <SearchResult />
            </Route>
            <Route path="/search/:ingredient/:dishId">
                <Dish />
            </Route>
            <Route path="/:categoryId/:dishId">
                <Dish />
            </Route>
            <Route path="/:categoryId">
                <DishesList />
            </Route>
            <Route path="/" component={CategoryList} />
        </Switch>
    </Router>
);