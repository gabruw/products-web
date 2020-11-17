//#region Imports

import { CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import useStyles from './styles';

//#endregion

const Loader = ({ isLoading }) => {
    const styles = useStyles();

    const titleClass = clsx(styles.content, styles.title);
    return (
        <Fragment>
            {isLoading && (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <CircularProgress size={60} color='primary' />
                    </div>

                    <div className={titleClass}>
                        <Typography variant='h4' color='secondary'>
                            Carregando...
                        </Typography>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Loader;
