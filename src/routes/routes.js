//#region Imports

import ROUTE_NAME from './route-name';
import Login from 'views/login';
import Home from 'views/home';
import Product from 'views/product';
import Order from 'views/order';
import User from 'views/user';
import Error from 'views/error';

//#endregion

const ROUTES = [
    {
        exact: true,
        component: Login,
        path: '/'
    },
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.LOGIN
    },
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.HOME
    },
    {
        exact: true,
        component: Home,
        path: ROUTE_NAME.IN.HOME
    },
    {
        exact: true,
        component: Product,
        path: ROUTE_NAME.IN.PRODUCT
    },
    {
        exact: true,
        component: Order,
        path: ROUTE_NAME.IN.ORDER
    },
    {
        exact: true,
        component: User,
        path: ROUTE_NAME.IN.USER
    },
    {
        exact: true,
        component: Error,
        path: '*'
    }
];

export default ROUTES;
