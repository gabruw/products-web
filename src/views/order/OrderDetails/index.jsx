//#region Imports

import ResumeViewer from 'components/ResumeViewer';
import React from 'react';
import ORDER_FIELDS from 'utils/constants/field/order';
import ORDER_LABELS from 'utils/constants/label/order';
import useStyles from './styles';

//#endregion

const OrderDetails = ({ order }) => {
    const styles = useStyles();

    return (
        <div className={styles.content}>
            <ResumeViewer width='32%' title={ORDER_LABELS.DATE} text={order[ORDER_FIELDS.DATE]} />
        </div>
    );
};

export default OrderDetails;
