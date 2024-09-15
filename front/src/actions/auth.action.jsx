import axios from "axios";

export const POST_AUTH = "POST_AUTH";
export const AUTH_ERROR = "AUTH_ERROR";

export const loginUser = (data) => {        
        return async (dispatch) => {
            try {
                const res = await axios.post("http://localhost:3001/api/v1/user/login", data);
                dispatch({
                    type: POST_AUTH,
                    payload: res.data, // Assurez-vous de bien envoyer la réponse
                });
                localStorage.setItem('authToken', res.data.token);
            } catch (error) {
                console.error('Login failed', error);
                dispatch({
                    type: AUTH_ERROR,
                    payload: error.response?.data?.message || "Unknown error",
                });
                console.log(error.response)
            }
        };
    };