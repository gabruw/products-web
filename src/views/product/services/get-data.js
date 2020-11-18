//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getAllProducts = () => {
    return API.get(ENDPOINTS.PRODUCT.GET_ALL);
};
