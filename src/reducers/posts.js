import {LIST_POSTS} from '../actions/posts';

export default function (state = { list: [] }, action) {
    switch(action.type) {
        case LIST_POSTS:
            return Object.assign({}, state, { list: action.payload });
        default:
            return state;
    }
};