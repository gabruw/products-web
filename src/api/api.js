//#region Imports

import axios from 'axios';
import USER_FIELDS from 'utils/constants/field/user';
import ENDPOINTS from './endpoint';

//#endregion

const API = axios.create({
    baseURL: ENDPOINTS.BASE_URL,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});

API.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem([USER_FIELDS.THIS]));

    if (user && user.token) {
        config.headers.Authorization = user.token;
    }

    return config;
});

export default API;
