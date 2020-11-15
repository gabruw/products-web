//#region Imports

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

//#endregion

const ButtonUI = ({
    children,
    startIcon,
    isLoading,
    isDisabled,
    color = 'primary',
    variant = 'contained',
    ...rest
}) => (
    <Button
        color={color}
        variant={variant}
        disabled={isDisabled || isLoading}
        startIcon={!isLoading && startIcon}
        {...rest}
    >
        {!isLoading ? children : <CircularProgress size={22} />}
    </Button>
);

export default ButtonUI;
