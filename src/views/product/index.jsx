//#region Imports

import ContentBox from 'containers/ContentBox';
import ModalUI from 'containers/ModalUI';
import React, { Fragment, useEffect } from 'react';
import useProductContext, { ProductContextProvider } from 'storage/products/context';
import FormProduct from './FormProduct';
import ProductList from './ProductList';

//#endregion

const Product = () => (
    <ProductContextProvider>
        <Provider />
    </ProductContextProvider>
);

const Provider = () => {
    const { list, show, select, modalRef, researchProducts } = useProductContext();

    useEffect(() => {
        researchProducts();
    }, [researchProducts]);

    return (
        <Fragment>
            <ModalUI title='Adicionar Produto' modalRef={modalRef} onClose={select}>
                <FormProduct />
            </ModalUI>

            <ContentBox title='Produtos' research={researchProducts} add={show}>
                <ProductList list={list} />
            </ContentBox>
        </Fragment>
    );
};

export default Product;
