//#region Imports

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import Logo from 'assets/images/logo.png';
import clsx from 'clsx';
import React, { useMemo, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useSystemContext from 'storage/system/context';
import USER_FIELDS from 'utils/constants/field/user';
import useStyles from './styles';

//#endregion

const TopMenu = ({ open, setOpen }) => {
    const styles = useStyles();
    const history = useHistory();

    const [menu, setMenu] = useState(null);
    const { user, removeUser } = useSystemContext();

    const name = useMemo(() => user && String(user[USER_FIELDS.NAME]).split(' ')[0], [user]);

    const iconButtonClass = clsx(styles.menuButton, open && styles.hide);
    const appBarClass = clsx(styles.appBar, {
        [styles.appBarShift]: open
    });

    const logout = useCallback(() => {
        removeUser();
        history.push(ROUTE_NAME.OUT.LOGIN);
    }, [removeUser, history]);

    return (
        <AppBar position='fixed' className={appBarClass}>
            <Toolbar>
                <IconButton edge='start' color='inherit' className={iconButtonClass} onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>

                <img src={Logo} alt='logo' className={styles.img} />

                <Typography variant='h3' noWrap>
                    Prod'n Box
                </Typography>

                <div className={styles.right}>
                    <IconButton color='inherit' onClick={() => setMenu(true)}>
                        <AccountCircle />
                        <Typography variant='h6' noWrap>
                            {name}
                        </Typography>
                    </IconButton>

                    <Menu
                        keepMounted
                        open={menu}
                        anchorEl={menu}
                        onClose={() => setMenu(false)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                    >
                        <MenuItem onClick={() => history.push(ROUTE_NAME.IN.USER)}>
                            <SettingsIcon />
                            Configurações
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={() => logout()}>
                            <LocalHotelIcon />
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu;
