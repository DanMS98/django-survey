import axios from "axios";

const getAPI = axios.create({
    baseURL: 'http://aris.ut.ac.ir:57742',
    timeout: 5000,
})

export { getAPI }