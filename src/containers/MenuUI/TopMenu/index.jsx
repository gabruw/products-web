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
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useSystemReducer from 'storage/system/reducer';
import useStyles from './styles';
import USER_FIELDS from './../../../utils/constants/field/user';
import Button from '@material-ui/core/Button';

//#endregion

const TopMenu = ({ open, setOpen }) => {
    const styles = useStyles();
    const history = useHistory();

    const [menu, setMenu] = useState(null);
    const { user, removeUser } = useSystemReducer();

    const name = user && String(user[USER_FIELDS.NAME]).split(' ')[0];

    const iconButtonClass = clsx(styles.menuButton, open && styles.hide);
    const appBarClass = clsx(styles.appBar, {
        [styles.appBarShift]: open
    });

    return (
        <AppBar position='fixed' className={appBarClass}>
            <Toolbar>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
                    className={iconButtonClass}
                    onClick={() => setOpen(true)}
                >
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
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                    >
                        <MenuItem onClick={() => history.push(ROUTE_NAME.IN.USER)}>
                            <SettingsIcon />
                            Configurações
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={() => removeUser()}>
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
