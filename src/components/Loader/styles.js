//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    container: {
        margin: '50px 0'
    },
    content: {
        ...ALIGN.CENTER
    },
    title: {
        margin: '10px 0 0 15px'
    }
}));

export default useStyles;
