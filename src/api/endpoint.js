//#region Imports

import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINTS = {
    BASE_URL: 'https://localhost:44321',
    CUSTOMER: {
        LOGIN: 'customer/login',
        INCLUDE: 'customer/include',
        REMOVE: (codigo) => `customer/remove?${buildQueryParams({ codigo })}`
    },
    PRODUCT: {
        EDIT: 'product/edit',
        GET_ALL: 'product/all',
        INCLUDE: 'product/include',
        REMOVE: (codigo) => `product/remove?${buildQueryParams({ codigo })}`
    },
    ORDER: {
        EDIT: 'order/edit',
        INCLUDE: 'order/include',
        REMOVE: (codigo) => `order/remove?${buildQueryParams({ codigo })}`,
        GET_ALL_CUSTOMER: (cpf) => `order/all-customer?${buildQueryParams({ cpf })}`
    }
};

export default ENDPOINTS;
