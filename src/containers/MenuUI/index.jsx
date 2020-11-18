//#region Imports

import clsx from 'clsx';
import React, { useState } from 'react';
import SideMenu from './SideMenu';
import useStyles from './styles';
import TopMenu from './TopMenu';

//#endregion

const MenuUI = ({ children }) => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    const mainClass = clsx(styles.content, {
        [styles.contentShift]: open
    });

    return (
        <div className={styles.root}>
            <TopMenu open={open} setOpen={setOpen} />
            <SideMenu open={open} setOpen={setOpen} />

            <main className={mainClass}>
                <div className={styles.drawerHeader} />
                {children}
            </main>
        </div>
    );
};

export default MenuUI;
