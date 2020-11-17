//#region Imports

import ResumeViewer from 'components/ResumeViewer';
import React from 'react';
import PRODUCT_FIELDS from 'utils/constants/field/product';
import useStyles from './styles';

//#endregion

const ProductDetails = ({ product }) => {
    const styles = useStyles();

    return (
        <div className={styles.content}>
            <ResumeViewer width='32%' title='Código de Barras' text={product[PRODUCT_FIELDS.BAR_CODE]} />
            <ResumeViewer width='32%' title='Valor' text={product[PRODUCT_FIELDS.VALUE]} />
            <ResumeViewer width='32%' title='Descrição' text={product[PRODUCT_FIELDS.DESCRIPTION]} />
        </div>
    );
};

export default ProductDetails;
