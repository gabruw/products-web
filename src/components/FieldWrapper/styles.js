//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ...ALIGN.LEFT
    },
    field: {
        alignItems: 'flex-start',
        ...ALIGN.LEFT
    },
    error: {
        color: 'red',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ...ALIGN.RIGHT
    }
});

export default useStyles;
