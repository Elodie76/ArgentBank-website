import axios from "axios";


// Action types
export const GET_USERPROFILE = "GET_USERPROFILE"
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

/* User data recovery action */
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action */
export const updateProfile = (username) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            
            
            const response = await axios.put('http://localhost:3001/api/v1/user/profile', { userName: username }, 
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                
                });
            
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: response.data.body, // Mise à jour des données dans le store
            });
        } catch (error) {
            console.error('Error details:', error.response?.data || error.message || 'Unknown error');
            dispatch({
                type: UPDATE_PROFILE_FAILURE,
                payload: error.response?.data || 'Error updating profile',
            });
        }
    }
};
