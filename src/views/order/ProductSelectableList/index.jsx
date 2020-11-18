//#region Imports

import SelectableList from 'components/SelectableList';
import React, { useCallback, useEffect } from 'react';
import useProductContext from 'storage/product/context';
import PRODUCT_FIELDS from 'utils/constants/field/product';
import ProductDetails from 'views/product/ProductDetails';

//#endregion

const OrderSelectableList = ({ setProducts }) => {
    const { list, researchProducts } = useProductContext();

    useEffect(() => {
        researchProducts();
    }, [researchProducts]);

    const handleProduct = useCallback(
        (product) =>
            setProducts((prevState) => {
                const diff = prevState.filter((prod) => prod[PRODUCT_FIELDS.COD] !== product[PRODUCT_FIELDS.COD]);

                return diff.length === prevState.length ? [...prevState, product] : diff;
            }),
        [setProducts]
    );

    return (
        <SelectableList list={list} text='Produto' onClick={handleProduct}>
            {({ value }) => <ProductDetails product={value} isModal />}
        </SelectableList>
    );
};

export default OrderSelectableList;
