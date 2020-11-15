//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import LOGIN_FIELDS from 'utils/constants/field/login';
import LOGIN_LABELS from 'utils/constants/label/login';
import loginSchema from './schema';

//#endregion

const FormLogin = () => {
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(loginSchema)
    });
    const { handleSubmit, errors } = methods;

    const onSubmit = useCallback((data) => {}, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldWrapper as={TextField} errors={errors} name={LOGIN_FIELDS.CPF} label={LOGIN_LABELS.CPF} />

                <FieldWrapper
                    as={TextField}
                    errors={errors}
                    name={LOGIN_FIELDS.PASSWORD}
                    label={LOGIN_LABELS.PASSWORD}
                />

                <Button type='submit'>Entrar</Button>
            </form>
        </FormProvider>
    );
};

export default FormLogin;
