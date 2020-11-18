//#region Imports

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import onClickAccordion from 'utils/functions/onClickAccordion';
import useStyles from './styles';

//#endregion

const SelectableList = ({ list = [], text, onClick, children }) => {
    const styles = useStyles();

    return (
        <div className={styles.content}>
            {list.length > 0 &&
                list.map((value, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={`${text} ${index + 1}`}
                                onClick={(event) => onClickAccordion(event, onClick(value))}
                            />
                        </AccordionSummary>

                        <AccordionDetails>{children({ value })}</AccordionDetails>
                    </Accordion>
                ))}
        </div>
    );
};

export default SelectableList;
