//#region Imports

import LOGIN_FIELDS from 'utils/constants/field/login';
import USER_FIELDS from 'utils/constants/field/user';
import yup from 'utils/validations/yup';

//#endregion

const registerSchema = yup.object().shape({
    [USER_FIELDS.NAME]: yup.string().required().max(255),
    [LOGIN_FIELDS.PASSWORD]: yup.string().required().min(6).max(40)
});

export default registerSchema;
