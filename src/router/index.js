import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryList from '../containers/CategoryList';
import DishList from '../containers/DishList';
import Dish from '../containers/Dish';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchResult from '../containers/SearchResult';

export default (
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/search/:ingredient' >
                <SearchResult />
            </Route>
            <Route path='/search/:ingredient/:dishId' >
                <Dish />
            </Route>
            <Route path='/:categoryId/:dishId' >
                <Dish />
            </Route>
            <Route path='/:categoryId' >
                <DishList />
            </Route>
            <Route path='/' component={CategoryList} />
        </Switch>
        <Footer/>
    </Router>
);
