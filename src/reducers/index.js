import {combinedReducers} from 'redux';

import categories from './categories';
import dishes from './dishes';
import dish from './dish';

export default combinedReducers({
    categories, dishes, dish
});