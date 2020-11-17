//#region Imports

import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import onClickAccordion from 'utils/functions/onClickAccordion';
import useStyles from './styles';

//#endregion

const IconButtonWithoutBlank = withStyles({
    root: {
        fontSize: 0
    }
})(IconButton);

const IconButtonAccordion = ({ text, icon, onClick }) => {
    const styles = useStyles();

    return (
        <IconButtonWithoutBlank aria-label='button-accordion' onClick={(e) => onClickAccordion(e, () => onClick())}>
            <div className={styles.btnAlign}>
                {icon}
                <Typography variant='subtitle1' color='primary'>
                    {text}
                </Typography>
            </div>
        </IconButtonWithoutBlank>
    );
};

export default IconButtonAccordion;
