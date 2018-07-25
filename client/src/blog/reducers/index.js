import { combineReducers } from 'redux';
import postReducer from './postReducers';
import enterReducers from './enterReducers';

export default combineReducers({
    posts: postReducer,
    enter: enterReducers
});