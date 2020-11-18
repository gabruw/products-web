//#region Imports

import { ThemeProvider } from '@material-ui/core';
import 'assets/css/global.css';
import React from 'react';
import { SystemContextProvider } from 'storage/system/context';
import USER_FIELDS from 'utils/constants/field/user';
import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';

//#endregion

const App = () => {
    // Repopular System Context
    const user = JSON.parse(localStorage.getItem([USER_FIELDS.THIS]));

    return (
        <ThemeProvider theme={AppTheme}>
            <SystemContextProvider defaultValues={{ user }}>
                <AppRoutes />
            </SystemContextProvider>
        </ThemeProvider>
    );
};

export default App;
