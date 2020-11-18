//#region Imports

import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

//#endregion

const FieldWrapper = ({ as: Component, name, errors, label, className, normalizer, mask, ...rest }) => {
    const styles = useStyles();

    const componentClass = clsx(styles.component, className);
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <Controller
                    name={name}
                    defaultValue=''
                    render={(props) => (
                        <Component
                            {...props}
                            label={label}
                            variant='outlined'
                            error={Boolean(error)}
                            className={componentClass}
                            InputProps={{
                                inputComponent: mask
                            }}
                            {...rest}
                        />
                    )}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
