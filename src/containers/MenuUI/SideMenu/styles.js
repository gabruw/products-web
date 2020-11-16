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
    },
    icon: {
        color: '#FFFFFF'
    }
}));

export const useClasses = makeStyles(() => ({
    drawerPaper: {
        width: 240,
        background: COLOR.GRAY.DARK
    },
    divider: {
        background: COLOR.GRAY.LIGHTEST
    }
}));

export default useStyles;
