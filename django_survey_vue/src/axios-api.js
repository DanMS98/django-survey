import axios from "axios";

const getAPI = axios.create({
    baseURL: 'http://aris.ut.ac.ir/autsbackend',
    timeout: 5000,
})

export { getAPI }