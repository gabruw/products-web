//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        ...ALIGN.LEFT
    },
    title: {
        ...FONTS.GEOMANIST_MEDIUM
    },
    text: {
        ...FONTS.GEOMANIST
    },
    content: {
        minWidth: ({ width = '100%' }) => width
    }
}));

export default useStyles;
