//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN_STYLES from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    btnAlign: {
        flexDirection: 'column',
        marginBottom: -5,
        ...ALIGN_STYLES.CENTER
    }
});

export default useStyles;
