import { POST_AUTH, AUTH_ERROR } from '../actions/auth.action';

const initialState = { user: null, error: null };

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case POST_AUTH:
            // reset error on success
            return { ...state, user: action.payload, error: null };
        case AUTH_ERROR:
            // assign error message
            return { ...state, error: action.payload };
        default:
            return state;
    }
}