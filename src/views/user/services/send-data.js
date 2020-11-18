//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const putUser = (data) => {
    return API.put(ENDPOINTS.CUSTOMER.EDIT, data);
};
