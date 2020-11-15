//#region Imports

import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';
import clsx from 'clsx';

//#endregion

const FieldWrapper = ({ as, name, errors, label, className, ...rest }) => {
    const styles = useStyles();
    const error = useMemo(() => errors && errors[name], [errors, name]);
    const controllerClass = clsx(styles.controller, className);

    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <Controller
                    as={as}
                    name={name}
                    label={label}
                    defaultValue=''
                    variant='outlined'
                    error={Boolean(error)}
                    className={controllerClass}
                    {...rest}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
