import axios from "axios";
import apiHost from "./api";

const RequestApi = async (method, url, data) => {
    try {
        if (method === "POST") {
            const res = await axios.post(apiHost + url, data);
            return { success: true, data: res.data };
        }
        if (method === "GET") {
            const res = await axios.get(apiHost + url);
            return { success: true, data: res.data };
        }
    } catch (error) {
        return { success: false, error: error };
    }
};

export default RequestApi;
