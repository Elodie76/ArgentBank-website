import Axios from "axios";

export const GET_POST = "GET_POST";

export const getPosts = () => {        
        return (dispatch) => {
            return Axios.get("localhost:3001/api/v1/user/login").then((response) => {
                dispatch({
                    type: GET_POST,
                    payload: response.data,
                });
            });
        };
    };