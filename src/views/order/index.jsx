//#region Imports

import ContentBox from 'containers/ContentBox';
import ModalUI from 'containers/ModalUI';
import React, { Fragment, useEffect } from 'react';
import useOrderContext, { OrderContextProvider } from 'storage/order/context';
import FormOrder from './FormOrder';
import OrderList from './OrderList';

//#endregion

const Order = () => (
    <OrderContextProvider>
        <Provider />
    </OrderContextProvider>
);

const Provider = () => {
    const { list, show, select, loading, modalRef, researchOrders } = useOrderContext();

    useEffect(() => {
        researchOrders();
    }, [researchOrders]);

    return (
        <Fragment>
            <ModalUI title='Fazer Pedido' width={800} modalRef={modalRef} onClose={select}>
                <FormOrder />
            </ModalUI>

            <ContentBox title='Pedidos' research={researchOrders} add={show} loading={loading}>
                <OrderList list={list} />
            </ContentBox>
        </Fragment>
    );
};

export default Order;
