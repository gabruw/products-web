//#region Imports

import ORDER_FIELDS from 'utils/constants/field/order';
import yup, { emptyStringToUndefined } from 'utils/validations/yup/yup';

//#endregion

const productSchema = yup.object().shape({
    [ORDER_FIELDS.DATE]: yup.date().transform(emptyStringToUndefined).required()
});

export default productSchema;
