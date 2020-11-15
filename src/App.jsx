//#region Imports

import { ThemeProvider } from '@material-ui/core';
import 'assets/css/global.css';
import React from 'react';
import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';

//#endregion

const App = () => (
    <ThemeProvider theme={AppTheme}>
        <AppRoutes />
    </ThemeProvider>
);

export default App;
