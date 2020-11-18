//#region Imports

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { useCallback } from 'react';
import SideMenuItem from './SideMenuItem';
import useStyles, { useClasses } from './styles';

//#endregion

const SideMenu = ({ open, setOpen }) => {
    const theme = useTheme();
    const styles = useStyles();
    const classes = useClasses();

    const handleDrawerClose = useCallback(() => setOpen(false), [setOpen]);

    return (
        <Drawer
            open={open}
            anchor='left'
            variant='persistent'
            className={styles.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={styles.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? (
                        <ChevronLeftIcon className={styles.icon} />
                    ) : (
                        <ChevronRightIcon className={styles.icon} />
                    )}
                </IconButton>
            </div>

            <Divider classes={{ root: classes.divider }} />
            <SideMenuItem isTop />

            <Divider classes={{ root: classes.divider }} />
            <SideMenuItem />
            <Divider classes={{ root: classes.divider }} />
        </Drawer>
    );
};

export default SideMenu;
