import {
    POST_USER,
    USER_EXIT
} from '../actions/types';

const initialState = {
    response: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_USER:
            localStorage.setItem('response', action.payload)
            return {
                ...state,
                response: action.payload
            }
        case USER_EXIT:
            localStorage.setItem('response', false)
            return {
                ...state,
                response: action.payload
            }
        default:
            return state;
    }
}