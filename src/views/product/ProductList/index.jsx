//#region Imports

import AccordionUI from 'components/AccordionUI';
import MessageBox from 'containers/MessageBox';
import React, { useCallback } from 'react';
import useProductContext from 'storage/products/context';
import useRequestState from 'utils/hooks/useRequestState';
import ProductDetails from '../ProductDetails';
import { deleteProduct } from '../services/send-data';

//#endregion

const ProductList = () => {
    const { run } = useRequestState();
    const { show, select, list, researchProducts } = useProductContext();

    const edit = useCallback(
        (cod) => {
            select(cod);
            show();
        },
        [select, show]
    );

    const remove = useCallback(
        async (cod) => {
            await run(() => deleteProduct(cod));
            await researchProducts();
        },
        [run, researchProducts]
    );

    return list.length > 0 ? (
        list.map((product, index) => (
            <AccordionUI key={index} title={`Produto ${index + 1}`} value={product} edit={edit} remove={remove}>
                <ProductDetails product={product} />
            </AccordionUI>
        ))
    ) : (
        <MessageBox title='Lista vazia' text='Não há produtos cadastrados' severity='info' />
    );
};

export default ProductList;
