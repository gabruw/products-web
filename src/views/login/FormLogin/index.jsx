//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import MessageBox from 'containers/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import LOGIN_FIELDS from 'utils/constants/field/login';
import LOGIN_LABELS from 'utils/constants/label/login';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './../services/send-data';
import loginSchema from './schema';
import useSystemReducer from 'storage/system/reducer';

//#endregion

const FormLogin = () => {
    const { user, addUser } = useSystemReducer();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(loginSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            const response = await run(() => postLogin(data));
            addUser(response.data);
        },
        [run, addUser]
    );

    console.log(requestState);
    console.log('user', user);
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldWrapper as={TextField} errors={errors} name={LOGIN_FIELDS.CPF} label={LOGIN_LABELS.CPF} />

                <FieldWrapper
                    as={TextField}
                    type='password'
                    errors={errors}
                    name={LOGIN_FIELDS.PASSWORD}
                    label={LOGIN_LABELS.PASSWORD}
                />

                <ButtonUI type='submit' isLoading={requestState.isLoading}>
                    Entrar
                </ButtonUI>
            </form>

            <MessageBox title='Erro ao logar' errors={requestState.errors} />
        </FormProvider>
    );
};

export default FormLogin;
