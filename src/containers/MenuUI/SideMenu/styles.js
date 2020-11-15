//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }
}));

export const useClasses = makeStyles(() => ({
    drawerPaper: {
        width: 240,
        background: COLOR.GRAY.DARK
    }
}));

export default useStyles;
