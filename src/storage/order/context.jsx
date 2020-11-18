//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import useSystemContext from 'storage/system/context';
import ORDER_FIELDS from 'utils/constants/field/order';
import USER_FIELDS from 'utils/constants/field/user';
import useRequestState from 'utils/hooks/useRequestState';
import { getAllOrdersByCustomer } from 'views/order/services/get-data';

//#endregion

const OrderContext = createContext();

const initialState = {
    list: [],
    selected: null,
    loading: false
};

export const OrderContextProvider = ({ children }) => {
    const modalRef = useRef(null);
    const { user } = useSystemContext();
    const [state, setState] = useState(initialState);

    const { run } = useRequestState();
    const fetchOrders = useCallback(() => run(() => getAllOrdersByCustomer(user[USER_FIELDS.CPF])), [run, user]);

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setList = useCallback(
        (data) => {
            setState((prevState) => ({
                ...prevState,
                list: data ? data : initialState.list
            }));
        },
        [setState]
    );

    const setSelect = useCallback(
        (cod) => {
            setState((prevState) => ({
                ...prevState,
                selected: cod ? prevState.list.find((ord) => ord[ORDER_FIELDS.COD] === cod) : initialState.selected
            }));
        },
        [setState]
    );

    const setLoading = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));
    }, [setState]);

    const researchOrders = useCallback(() => {
        setLoading();

        fetchOrders().then(({ data }) => {
            setList(data);
        });

        setLoading();
    }, [setLoading, fetchOrders, setList]);

    return (
        <OrderContext.Provider value={{ show, hide, setList, setSelect, setLoading, researchOrders, modalRef, state }}>
            {children}
        </OrderContext.Provider>
    );
};

const useOrderContext = () => {
    const { show, hide, setList, setSelect, setLoading, researchOrders, modalRef, state } = useContext(OrderContext);

    return { show, hide, setList, setSelect, setLoading, researchOrders, modalRef, ...state };
};

export default useOrderContext;
