//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import ButtonUI from 'components/ButtonUI';
import FieldWrapper from 'components/FieldWrapper';
import MessageBox from 'containers/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useProductContext from 'storage/product/context';
import PRODUCT_FIELDS from 'utils/constants/field/product';
import PRODUCT_LABELS from 'utils/constants/label/product';
import useRequestState from 'utils/hooks/useRequestState';
import decimalMask from 'utils/validations/masks/decimal';
import { postProduct, putProduct } from './../services/send-data';
import productSchema from './schema';
import useStyles from './styles';

//#endregion

const FormProduct = () => {
    const styles = useStyles();
    const { hide, selected } = useProductContext();

    const rowClass = clsx(styles.row, styles.spacing);
    const buttonContainerClass = clsx(styles.buttonContainer, styles.spacing);

    const methods = useForm({
        reValidateMode: 'onBlur',
        defaultValues: selected || {},
        resolver: yupResolver(productSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            const response = await run(() => (selected ? putProduct({ ...selected, ...data }) : postProduct(data)));
            !(response.errors && response.errors.length > 0) && hide();
        },
        [selected, run, hide]
    );

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={rowClass}>
                    <div className='largeField'>
                        <FieldWrapper
                            as={TextField}
                            errors={errors}
                            disabled={Boolean(selected)}
                            name={PRODUCT_FIELDS.BAR_CODE}
                            label={PRODUCT_LABELS.BAR_CODE}
                        />
                    </div>

                    <div className='field'>
                        <FieldWrapper
                            as={TextField}
                            errors={errors}
                            mask={decimalMask}
                            name={PRODUCT_FIELDS.VALUE}
                            label={PRODUCT_LABELS.VALUE}
                        />
                    </div>

                    <div className='field'>
                        <FieldWrapper
                            as={TextField}
                            errors={errors}
                            name={PRODUCT_FIELDS.DESCRIPTION}
                            label={PRODUCT_LABELS.DESCRIPTION}
                        />
                    </div>
                </div>

                <div className={buttonContainerClass}>
                    <div className={styles.buttonContent}>
                        <ButtonUI color='secondary' isLoading={requestState.isLoading} onClick={() => hide()}>
                            Voltar
                        </ButtonUI>

                        <ButtonUI type='submit' isLoading={requestState.isLoading}>
                            Confirmar
                        </ButtonUI>
                    </div>
                </div>

                <MessageBox title='Erro ao cadastrar' errors={requestState.errors} />
            </form>
        </FormProvider>
    );
};

export default FormProduct;
