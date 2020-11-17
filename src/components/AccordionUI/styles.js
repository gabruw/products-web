//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import FONTS from 'assets/styles/fonts';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    accordionContent: {
        margin: '2px 0'
    },
    divAccordion: {
        width: '75%',
        paddingLeft: '50px',
        flexDirection: 'row',
        alignItems: 'center',
        ...ALIGN.BETWEEN
    },
    titulo: {
        flex: 3,
        color: COLOR.BLUE.MEDIUM,
        ...FONTS.GEOMANIST_MEDIUM,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    divBotoes: {
        width: '20%',
        paddingRight: 10,
        flexDirection: 'row',
        ...ALIGN.RIGHT
    },
    details: {
        borderTop: `1px solid ${COLOR.GRAY.LIGHT}`
    },
    divAccordionDetails: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        padding: '0px 50px',
        justifyContent: 'space-between',
        ...ALIGN.COLUMN
    }
}));

export default useStyles;
