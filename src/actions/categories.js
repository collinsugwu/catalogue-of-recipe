import { FETCH_ERROR, FETCH_CATEGORIES, FETCHING } from './types';

const fetchCategoris = () => dispatch => {
    dispatch({
        type: FETCHING,
        isFetching: true,
        isSearching: true,
    });
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php`)
    .then(response => response.json())
    .then(categories => {
        dispatch({
            type: FETCH_CATEGORIES,
            categories: categories.categories
        });
    }).catch(err => dispatch({
        type: FETCH_ERROR,
        error: err,
      }));;
}