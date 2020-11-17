//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles((theme) => ({
    modal: {
        ...ALIGN.CENTER
    },
    paper: {
        outline: 0,
        minWidth: 600,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: theme.palette.background.paper,
        ...ALIGN.COLUMN
    },
    header: {
        marginBottom: 20
    },
    row: {
        width: '100%',
        ...ALIGN.CENTER
    },
    divider: {
        height: 2,
        width: '100%'
    }
}));

export const useClasses = makeStyles(() => ({
    divider: {
        background: COLOR.GRAY.LIGHT
    }
}));

export default useStyles;
