import axios from 'axios'

const api = axios.create({
    baseURL: "https://mypyback.onrender.com"
});

export default api;