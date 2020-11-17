//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    buttonContent: {
        width: '100%',
        ...ALIGN.BETWEEN
    },
    left: {
        ...ALIGN.LEFT
    },
    right: {
        ...ALIGN.RIGHT
    },
    button: {
        padding: 10,
        marginBottom: 30
    },
    icon: {
        color: '#FFFFFF'
    }
}));

export default useStyles;
