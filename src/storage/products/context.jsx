//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import PRODUCT_FIELDS from 'utils/constants/field/product';
import useRequestState from 'utils/hooks/useRequestState';
import { getAllProducts } from 'views/product/services/get-data';

//#endregion

const ProductContext = createContext();

const initialState = {
    list: [],
    selected: null
};

export const ProductContextProvider = ({ children }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState(initialState);

    const { run } = useRequestState();
    const fetchProducts = useCallback(() => run(() => getAllProducts()), [run]);

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const add = useCallback(
        (data) => {
            setState((prevState) => ({
                ...prevState,
                list: data ? data : initialState.list
            }));
        },
        [setState]
    );

    const select = useCallback(
        (cod) => {
            setState((prevState) => ({
                ...prevState,
                selected: cod ? prevState.list.find((prod) => prod[PRODUCT_FIELDS.COD] === cod) : initialState.selected
            }));
        },
        [setState]
    );

    const researchProducts = useCallback(() => {
        fetchProducts().then(({ data }) => {
            add(data);
        });
    }, [fetchProducts, add]);

    return (
        <ProductContext.Provider value={{ show, hide, add, select, researchProducts, modalRef, state }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProductContext = () => {
    const { show, hide, add, select, researchProducts, modalRef, state } = useContext(ProductContext);

    return { show, hide, add, select, researchProducts, modalRef, ...state };
};

export default useProductContext;
