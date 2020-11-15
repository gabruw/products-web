//#region Imports

import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: require('../views/login').default
    },
    {
        exact: true,
        path: ROUTE_NAME.OUT.AUTHENTICATION,
        component: require('../views/login').default
    },
    {
        exact: true,
        path: ROUTE_NAME.OUT.HOME,
        component: require('../views/login').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.HOME,
        component: require('../views/home').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.PRODUCT,
        component: require('../views/product').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.ORDER,
        component: require('../views/order').default
    },
    {
        exact: true,
        path: ROUTE_NAME.IN.USER,
        component: require('../views/user').default
    },
    {
        path: '*',
        exact: true,
        component: require('../views/error').default
    }
];

export default ROUTES;
