import axios from "axios";

const getAPI = axios.create({
    baseURL: 'http://aris.ut.ac.ir/autsbackend',
    // baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
})

export { getAPI }

