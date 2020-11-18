//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getAllOrdersByCustomer = (cpf) => {
    return API.get(ENDPOINTS.ORDER.GET_ALL_CUSTOMER(cpf));
};
