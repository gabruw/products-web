//#region Imports

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles, { useClasses } from './styles';

//#endregion

const ContextBox = ({ title, children }) => {
    const styles = useStyles();
    const classes = useClasses();

    return (
        <Paper className={styles.paper}>
            <div className={styles.title}>
                <Typography variant='h2' color='primary'>
                    {title}
                </Typography>
            </div>

            <Divider classes={{ root: classes.divider }} />

            <div className={styles.content}>{children}</div>
        </Paper>
    );
};

export default ContextBox;
