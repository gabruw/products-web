//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100vh',
        ...ALIGN.CENTER
    }
}));

export default useStyles;
