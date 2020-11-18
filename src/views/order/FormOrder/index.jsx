//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import ButtonUI from 'components/ButtonUI';
import DateField from 'components/DateField';
import MessageBox from 'containers/MessageBox';
import React, { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useOrderContext from 'storage/order/context';
import { ProductContextProvider } from 'storage/product/context';
import ORDER_FIELDS from 'utils/constants/field/order';
import ORDER_LABELS from 'utils/constants/label/order';
import useRequestState from 'utils/hooks/useRequestState';
import OrderSelectableList from '../ProductSelectableList';
import { postOrder, putOrder } from '../services/send-data';
import orderSchema from './schema';
import useStyles from './styles';

//#endregion

const FormOrder = () => {
    const styles = useStyles();
    const [products, setProducts] = useState([]);
    const { hide, selected } = useOrderContext();

    const rowClass = clsx(styles.row, styles.spacing);
    const buttonContainerClass = clsx(styles.buttonContainer, styles.spacing);

    const methods = useForm({
        reValidateMode: 'onBlur',
        defaultValues: selected || {},
        resolver: yupResolver(orderSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            data = { products: products, ...data };

            const response = await run(() => (selected ? putOrder({ ...selected, ...data }) : postOrder(data)));
            !(response.errors && response.errors.length > 0) && hide();
        },
        [products, selected, run, hide]
    );

    console.log(products);
    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={rowClass}>
                    <div className='field'>
                        <DateField disablePast errors={errors} name={ORDER_FIELDS.DATE} label={ORDER_LABELS.DATE} />
                    </div>
                </div>

                <ProductContextProvider>
                    <OrderSelectableList setProducts={setProducts} />
                </ProductContextProvider>

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

export default FormOrder;
