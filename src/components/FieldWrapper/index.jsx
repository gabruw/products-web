//#region Imports

import React from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

//#endregion

const FieldWrapper = ({ as, name, errors, label, ...rest }) => {
    const styles = useStyles();
    const error = errors && errors[name];

    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <Controller
                    as={as}
                    name={name}
                    error={error}
                    label={label}
                    defaultValue=''
                    variant='outlined'
                    {...rest}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
