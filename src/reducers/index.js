import { combineReducers } from 'redux';

import categories from './categories';
import dishes from './dishes';
import dish from './dish';
import searched from './searchedDishes';

export default combineReducers({
    categories, dishes, dish, searched
});
