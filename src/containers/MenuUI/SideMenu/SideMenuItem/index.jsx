//#region Imports

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import SIDEMENU_OPTIONS from 'utils/constants/side-menu';
import useStyles from './styles';

//#endregion

const SideMenuItem = ({ isTop = false }) => {
    const styles = useStyles();
    const history = useHistory();

    const options = useMemo(() => (isTop ? SIDEMENU_OPTIONS.TOP : SIDEMENU_OPTIONS.BOTTOM), [isTop]);

    return (
        <List>
            {options.map(({ text, icon: Icon, path }, index) => (
                <ListItem key={index} onClick={() => history.push(path)} button>
                    <ListItemIcon>
                        <Icon className={styles.content} />
                    </ListItemIcon>
                    <ListItemText className={styles.content} primary={text} />
                </ListItem>
            ))}
        </List>
    );
};

export default SideMenuItem;
