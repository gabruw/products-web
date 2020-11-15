//#region Imports

import axios from 'axios';
import ENDPOINTS from './endpoint';

//#endregion

const API = axios.create({
    baseURL: ENDPOINTS.BASE_URL
});

API.interceptors.request.use((config) => {
    const token = '';

    if (token) {
        config.headers.Authorization = token;
    }

    return config;
});

export default API;
