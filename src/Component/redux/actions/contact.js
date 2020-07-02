import axios from "axios";
import "dotenv/config";

export const readContact = () => {
    return {
        type: "GET_CONTACT",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}`
        })
    };
};

export const searchContact = (name) => {
    return {
        type: "GET_SEARCHCONTACT",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}?name=${name}`
        })
    };
};

export const updateContact = (id, data) => {
    return {
        type: "UPDATE_CONTACT",
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}/${id}`,
            data: data
        })
    }
};