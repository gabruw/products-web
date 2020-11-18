//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Logo from 'assets/images/logo.png';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import MessageBox from 'containers/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useSystemContext from 'storage/system/context';
import LOGIN_FIELDS from 'utils/constants/field/login';
import USER_FIELDS from 'utils/constants/field/user';
import LOGIN_LABELS from 'utils/constants/label/login';
import USER_LABELS from 'utils/constants/label/user';
import useRequestState from 'utils/hooks/useRequestState';
import { postUser } from './../services/send-data';
import FieldBirthDate from './FieldBirthDate/index';
import userSchema from './schema';
import useStyles from './styles';

//#endregion

const FormLogin = ({ setIsLogin }) => {
    const styles = useStyles();
    const history = useHistory();
    const { addUser } = useSystemContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(userSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            const response = await run(() => postUser(data));
            if (response.success) {
                addUser(response.data);
                history.push(ROUTE_NAME.IN.HOME);
            }
        },
        [run, addUser, history]
    );

    return (
        <Paper className={styles.paper}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.spacing}>
                        <Typography variant='h1'>Cadastrar</Typography>
                    </div>

                    <div className={styles.spacing}>
                        <img src={Logo} alt='logo' className={styles.img} />
                    </div>

                    <div className={styles.spacing}>
                        <FieldWrapper as={TextField} errors={errors} name={USER_FIELDS.NAME} label={USER_LABELS.NAME} />
                    </div>

                    <div className={styles.spacing}>
                        <FieldWrapper as={TextField} errors={errors} name={LOGIN_FIELDS.CPF} label={LOGIN_LABELS.CPF} />
                    </div>

                    <div className={styles.spacing}>
                        <FieldWrapper
                            as={TextField}
                            type='password'
                            errors={errors}
                            name={LOGIN_FIELDS.PASSWORD}
                            label={LOGIN_LABELS.PASSWORD}
                        />
                    </div>

                    <div className={styles.spacing}>
                        <FieldBirthDate errors={errors} />
                    </div>

                    <div className={styles.spacing}>
                        <ButtonUI type='submit' isLoading={requestState.isLoading} className={styles.button}>
                            Cadastrar
                        </ButtonUI>
                    </div>

                    <div className={styles.spacing}>
                        <ButtonUI
                            color='secondary'
                            className={styles.button}
                            onClick={() => setIsLogin(true)}
                            isDisabled={requestState.isLoading}
                        >
                            Login
                        </ButtonUI>
                    </div>

                    <MessageBox title='Erro ao se cadastrar' errors={requestState.errors} />
                </form>
            </FormProvider>
        </Paper>
    );
};

export default FormLogin;
