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
    img: {
        width: 120,
        height: 120
    },
    spacing: {
        marginBottom: 25
    },
    row: {
        ...ALIGN.LEFT
    },
    field: {
        marginRight: 20
    }
}));

export default useStyles;
