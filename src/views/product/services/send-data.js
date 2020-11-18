//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const postProduct = (data) => {
    return API.post(ENDPOINTS.PRODUCT.INCLUDE, data);
};

export const putProduct = (data) => {
    return API.put(ENDPOINTS.PRODUCT.EDIT, data);
};

export const deleteProduct = (cod) => {
    return API.delete(ENDPOINTS.PRODUCT.REMOVE(cod));
};
