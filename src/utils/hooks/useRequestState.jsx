//#region Imports

import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useSystemContext from 'storage/system/context';
import sleep from 'utils/functions/sleep';

//#endregion

const initalState = {
    data: null,
    errors: null,
    success: false,
    isLoading: false
};

const useRequestState = () => {
    const history = useHistory();
    const { removeUser } = useSystemContext();
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const run = useCallback(
        async (callback, options) => {
            setRequestState({ ...initalState, isLoading: true, success: undefined });

            if (options?.sleep) {
                await sleep(options?.sleepTimeout || 3000);
            }

            let responseObj = null;
            try {
                const { data } = await callback();

                responseObj = {
                    ...initalState,
                    success: true,
                    data: data.data,
                    token: data.token,
                    errors: data.errors
                };
            } catch (error) {
                const hadError = error && error.response;
                if (hadError && error.response.status === 401) {
                    removeUser();
                    history.push([ROUTE_NAME.OUT.DEFAULT]);
                }

                if (options?.autoClear) {
                    clear(5000);
                }

                responseObj = {
                    ...initalState,
                    errors: hadError && error.response.data ? error.response.data.errors : error
                };
            }

            setRequestState(responseObj);
            return responseObj;
        },
        [removeUser, history, clear]
    );

    return {
        run,
        clear,
        requestState
    };
};

export default useRequestState;
