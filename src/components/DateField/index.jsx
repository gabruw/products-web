//#region Imports

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import clsx from 'clsx';
import ptBrLocale from 'date-fns/locale/pt-BR';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

//#endregion

const DateField = ({ as, name, errors, label, className, ...rest }) => {
    const styles = useStyles();
    const error = useMemo(() => errors && errors[name], [errors, name]);
    const dateClass = clsx(styles.date, className);

    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBrLocale}>
                    <Controller
                        as={KeyboardDatePicker}
                        name={name}
                        label={label}
                        disableToolbar
                        variant='inline'
                        format='dd/MM/yyyy'
                        error={Boolean(error)}
                        inputVariant='outlined'
                        className={dateClass}
                        {...rest}
                    />
                </MuiPickersUtilsProvider>
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default DateField;
