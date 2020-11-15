//#region Imports

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ROUTE_NAME from 'routes/route-name';

//#endregion

const SIDEMENU_OPTIONS = {
    TOP: [
        {
            text: 'Principal',
            icon: HomeIcon,
            path: ROUTE_NAME.IN.HOME
        },
        {
            text: 'Produtos',
            icon: ShoppingBasketIcon,
            path: ROUTE_NAME.IN.PRODUCT
        },
        {
            text: 'Pedidos',
            icon: ShoppingCartIcon,
            path: ROUTE_NAME.IN.ORDER
        }
    ],
    BOTTOM: [
        {
            text: 'Configurações',
            icon: SettingsIcon,
            path: ROUTE_NAME.IN.USER
        }
    ]
};

export default SIDEMENU_OPTIONS;
