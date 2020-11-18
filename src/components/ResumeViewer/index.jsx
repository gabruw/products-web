//#region Imports

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

//#endregion

const ResumeViewer = ({ title, text, width }) => {
    const styles = useStyles({ width });

    const textClass = clsx(styles.text, styles.root);
    const titleClass = clsx(styles.title, styles.root);

    return (
        <div className={styles.content}>
            <Typography className={titleClass}>{title}</Typography>
            <Typography className={textClass}>{text}</Typography>
        </div>
    );
};

export default ResumeViewer;
