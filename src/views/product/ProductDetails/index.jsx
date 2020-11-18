//#region Imports

import ResumeViewer from 'components/ResumeViewer';
import React, { useMemo } from 'react';
import PRODUCT_FIELDS from 'utils/constants/field/product';
import PRODUCT_LABELS from 'utils/constants/label/product';
import useStyles from './styles';
import clsx from 'clsx';

//#endregion

const ProductDetails = ({ product, isModal }) => {
    const styles = useStyles();
    const contentClass = clsx({ [styles.content]: !isModal });

    const width = useMemo(() => (isModal ? '100%' : '32%'), [isModal]);

    return (
        <div className={contentClass}>
            <ResumeViewer width={width} title={PRODUCT_LABELS.BAR_CODE} text={product[PRODUCT_FIELDS.BAR_CODE]} />
            <ResumeViewer width={width} title={PRODUCT_LABELS.VALUE} text={product[PRODUCT_FIELDS.VALUE]} />
            <ResumeViewer width={width} title={PRODUCT_LABELS.DESCRIPTION} text={product[PRODUCT_FIELDS.DESCRIPTION]} />
        </div>
    );
};

export default ProductDetails;
