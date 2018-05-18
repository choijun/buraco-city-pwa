import {combineReducers} from 'redux';
import Posts from '../reducers/posts';

const rootReducer = combineReducers({
    posts: Posts
});

export default rootReducer;