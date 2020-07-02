import axios from "axios";
import "dotenv/config";

export const readContactDetail = (id) => {
    return {
        type: "GET_CONTACTDETAIL",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}/detail/${id}`
        })
    };
};