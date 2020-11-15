//#region Imports

import { useReducer } from 'react';
import USER_FIELDS from 'utils/constants/field/user';
import creators from './creators';
import SYSTEM_TYPES from './types';

//#endregion

const initialState = {
    [USER_FIELDS.THIS]: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case SYSTEM_TYPES.ADD_USER:
            localStorage.setItem([USER_FIELDS.THIS], action.payload);
            return { [USER_FIELDS.THIS]: action.payload };
        case SYSTEM_TYPES.REMOVE_USER:
            localStorage.removeItem([USER_FIELDS.THIS]);
            return {
                [USER_FIELDS.THIS]: initialState[USER_FIELDS.THIS]
            };
        default:
            return state;
    }
};

const useSystemReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return { ...state, ...creators(dispatch) };
};

export default useSystemReducer;
