import movies from './MoviesReducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies,
});

export default rootReducer;