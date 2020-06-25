import {FETCH_CATEGORIES, FETCHING_CATEGORIES } from '../actions/types';

export default (state = {categories = [], isFetching = false}, actions) => {
    switch (actions.type){
        case FETCHING_CATEGORIES:
            return {...state, isFetching: true};
        case FETCH_CATEGORIES:
            return {...state, categories:actions.categories, isFetching: true}
        default:
            return state;
    }
}