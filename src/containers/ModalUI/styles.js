//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles((theme) => ({
    modal: {
        ...ALIGN.CENTER
    },
    paper: {
        outline: 0,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: ({ width = 600 }) => width,
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
        marginTop: 10,
        width: '100%'
    }
}));

export const useClasses = makeStyles(() => ({
    divider: {
        background: COLOR.GRAY.LIGHT
    }
}));

export default useStyles;
