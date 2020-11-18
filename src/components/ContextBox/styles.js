//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    paper: {
        padding: 20
    },
    title: {
        marginBottom: 5
    },
    content: {
        marginTop: 30
    }
}));

export const useClasses = makeStyles(() => ({
    divider: {
        height: 2,
        background: COLOR.GRAY.DARK
    }
}));

export default useStyles;
