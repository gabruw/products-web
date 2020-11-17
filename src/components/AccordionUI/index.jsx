//#region Imports

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButtonAccordion from 'components/IconButtonAccordion';
import React from 'react';
import onClickAccordion from 'utils/functions/onClickAccordion';
import useStyles from './styles';

//#endregion

const AccordionUI = ({ title, value, edit, remove, children }) => {
    const styles = useStyles();

    return (
        <Accordion>
            <AccordionSummary
                classes={{ content: styles.accordionContent }}
                expandIcon={<ExpandMoreIcon fontSize='large' />}
            >
                <div className={styles.divAccordion}>
                    <Typography
                        className={styles.titulo}
                        onClick={(e) => onClickAccordion(e, () => edit(value.codigo))}
                    >
                        {title ? title : value.title}
                    </Typography>
                </div>

                <div className={styles.divBotoes}>
                    <IconButtonAccordion
                        text='Editar'
                        onClick={() => edit(value.codigo)}
                        icon={<EditIcon color='primary' />}
                    />

                    <IconButtonAccordion
                        text='Remover'
                        color='secondary'
                        onClick={() => remove(value.codigo)}
                        icon={<DeleteIcon color='secondary' />}
                    />
                </div>
            </AccordionSummary>

            <AccordionDetails className={styles.details}>
                <div className={styles.divAccordionDetails}>{children}</div>
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionUI;
