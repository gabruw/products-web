//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const postLogin = (data) => {
    return API.post(ENDPOINTS.CUSTOMER.LOGIN, data);
};
