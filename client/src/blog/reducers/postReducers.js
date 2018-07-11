import {
    FETCH_POSTS,
    NEW_POST,
    DEL_POST
} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case DEL_POST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}