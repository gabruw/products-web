//#region Imports

import LOGIN_FIELDS from 'utils/constants/field/login';
import USER_FIELDS from 'utils/constants/field/user';
import yup, { emptyStringToUndefined } from 'utils/validations/yup/yup';

//#endregion

const registerSchema = yup.object().shape({
    [USER_FIELDS.NAME]: yup.string().required().max(255),
    [LOGIN_FIELDS.PASSWORD]: yup.string().required().min(6).max(40),
    [USER_FIELDS.CPF]: yup.string().cpf().required().min(14).max(14),
    [USER_FIELDS.BIRTH]: yup.date().transform(emptyStringToUndefined).required()
});

export default registerSchema;
