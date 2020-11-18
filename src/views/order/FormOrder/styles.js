//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    paper: {
        width: 400,
        height: 800,
        ...ALIGN.CENTER
    },
    form: {
        width: 600
    },
    img: {
        width: 120,
        height: 120
    },
    field: {
        width: '50%',
        marginBottom: 25
    },
    spacing: {
        marginBottom: 25
    },
    row: {
        ...ALIGN.LEFT
    },
    buttonContainer: {
        ...ALIGN.RIGHT
    },
    buttonContent: {
        width: '30%',
        ...ALIGN.BETWEEN
    }
}));

export default useStyles;
