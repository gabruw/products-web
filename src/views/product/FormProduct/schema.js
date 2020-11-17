//#region Imports

import PRODUCT_FIELDS from 'utils/constants/field/product';
import yup, { emptyStringToUndefined } from 'utils/validations/yup/yup';

//#endregion

const productSchema = yup.object().shape({
    [PRODUCT_FIELDS.BAR_CODE]: yup.string().required().max(255),
    [PRODUCT_FIELDS.DESCRIPTION]: yup.string().required().max(255),
    [PRODUCT_FIELDS.VALUE]: yup.number().transform(emptyStringToUndefined).required()
});

export default productSchema;
