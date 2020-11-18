//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        width: 240,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ...ALIGN.LEFT
    },
    field: {
        width: '100%',
        alignItems: 'flex-start',
        ...ALIGN.LEFT
    },
    date: {
        width: '100%'
    },
    error: {
        width: '100%',
        color: 'red',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ...ALIGN.RIGHT
    }
});

export default useStyles;
