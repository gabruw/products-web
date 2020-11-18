//#region Imports

import AccordionUI from 'components/AccordionUI';
import MessageBox from 'containers/MessageBox';
import React, { useCallback } from 'react';
import useOrderContext from 'storage/order/context';
import useRequestState from 'utils/hooks/useRequestState';
import OrderDetails from '../OrderDetails';
import { deleteOrder } from '../services/send-data';

//#endregion

const OrderList = () => {
    const { run } = useRequestState();
    const { show, setSelect, list, researchOrders } = useOrderContext();

    const edit = useCallback(
        (cod) => {
            setSelect(cod);
            show();
        },
        [setSelect, show]
    );

    const remove = useCallback(
        async (cod) => {
            await run(() => deleteOrder(cod));
            await researchOrders();
        },
        [run, researchOrders]
    );

    return list.length > 0 ? (
        list.map((order, index) => (
            <AccordionUI key={index} title={`Pedido ${index + 1}`} value={order} edit={edit} remove={remove}>
                <OrderDetails order={order} />
            </AccordionUI>
        ))
    ) : (
        <MessageBox title='Lista vazia' text='Não há pedidos cadastrados' severity='info' />
    );
};

export default OrderList;
