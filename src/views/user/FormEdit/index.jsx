//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import ButtonUI from 'components/ButtonUI';
import ContextBox from 'components/ContextBox';
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
import formatUserToEdit from './../services/format-data';
import { putUser } from './../services/send-data';
import userSchema from './schema';
import useStyles from './styles';

//#endregion

const FormEdit = () => {
    const styles = useStyles();
    const history = useHistory();
    const { user, editUser } = useSystemContext();

    const rowClass = clsx(styles.row, styles.spacing);

    const methods = useForm({
        defaultValues: user,
        reValidateMode: 'onBlur',
        resolver: yupResolver(userSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            data = formatUserToEdit(user, data);

            const response = await run(() => putUser(data));
            if (response.success) {
                editUser(response.data);
                history.push(ROUTE_NAME.IN.HOME);
            }
        },
        [run, user, editUser, history]
    );

    return (
        <ContextBox title='Configurações'>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.spacing}>
                        <Typography variant='h3' color='primary'>
                            Editar dados do usuário
                        </Typography>
                    </div>

                    <div className={rowClass}>
                        <div className={styles.field}>
                            <FieldWrapper
                                as={TextField}
                                errors={errors}
                                name={USER_FIELDS.NAME}
                                label={USER_LABELS.NAME}
                            />
                        </div>

                        <FieldWrapper
                            as={TextField}
                            type='password'
                            errors={errors}
                            name={LOGIN_FIELDS.PASSWORD}
                            label={LOGIN_LABELS.PASSWORD}
                        />
                    </div>

                    <div className={styles.spacing}>
                        <ButtonUI type='submit' isLoading={requestState.isLoading}>
                            Confirmar
                        </ButtonUI>
                    </div>

                    <MessageBox title='Erro ao editar o cadastro' errors={requestState.errors} />
                </form>
            </FormProvider>
        </ContextBox>
    );
};

export default FormEdit;
