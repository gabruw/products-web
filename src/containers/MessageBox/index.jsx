//#region Imports

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import React, { Fragment, useMemo } from 'react';

//#endregion

const MessageBox = ({ errors, title = '', text = '', severity = 'error' }) => {
    const hasErrors = useMemo(() => errors && Array.isArray(errors) && errors.length > 0, [errors]);
    const hasSome = useMemo(() => hasErrors || text, [hasErrors, text]);

    return (
        <Fragment>
            {hasSome && (
                <Alert severity={severity}>
                    <AlertTitle>{title}</AlertTitle>
                    {!hasErrors ? (
                        text
                    ) : (
                        <ul>
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    )}
                </Alert>
            )}
        </Fragment>
    );
};

export default MessageBox;
