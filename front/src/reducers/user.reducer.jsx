import { LOGOUT } from "../actions/auth.action"
import { GET_USERPROFILE } from "../actions/user.action"
import { UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from '../actions/user.action';


const initialState = {
    status: 'VOID',
    userData: {},
    error: null,
};

export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case UPDATE_PROFILE_SUCCESS:
            
            return {
                ...state,
                userData: action.payload,
                error: null,
                
            };
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}

        