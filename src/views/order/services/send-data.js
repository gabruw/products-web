//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const postOrder = (data) => {
    return API.post(ENDPOINTS.ORDER.INCLUDE, data);
};

export const putOrder = (data) => {
    return API.put(ENDPOINTS.ORDER.EDIT, data);
};

export const deleteOrder = (cod) => {
    return API.delete(ENDPOINTS.ORDER.REMOVE(cod));
};
