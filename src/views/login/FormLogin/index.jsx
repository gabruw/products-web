//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import MessageBox from 'containers/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useSystemContext from 'storage/system/context';
import LOGIN_FIELDS from 'utils/constants/field/login';
import LOGIN_LABELS from 'utils/constants/label/login';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './../services/send-data';
import loginSchema from './schema';

//#endregion

const FormLogin = () => {
    const history = useHistory();
    const { addUser } = useSystemContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(loginSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            const response = await run(() => postLogin(data));
            if (response.success) {
                addUser(response.data);
                history.push(ROUTE_NAME.IN.HOME);
            }
        },
        [run, addUser, history]
    );

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
