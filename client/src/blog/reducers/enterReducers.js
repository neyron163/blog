import {
    POST_USER
} from '../actions/types';

const initialState = {
    response: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_USER:
            return {
                ...state,
                response: action.payload
            }
            default:
            return state;
    }
}