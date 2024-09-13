import axios from "axios";

export const GET_POST = "GET_POST";
export const POST_AUTH = "POST_AUTH";

export const loginUser = (data) => {        
        return (dispatch) => {
            return axios.post("localhost:3001/api/v1/user/login",data).then((response) => {
                dispatch({
                    type: POST_AUTH,
                    payload: data,
                });
            });
        };
    };