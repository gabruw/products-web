//#region Imports

import LOGIN_FIELDS from 'utils/constants/field/login';
import yup from 'utils/validations/yup';

//#endregion

const loginSchema = yup.object().shape({
    [LOGIN_FIELDS.PASSWORD]: yup.string().required().min(6).max(40),
    [LOGIN_FIELDS.CPF]: yup.string().cpf().required().min(14).max(14)
});

export default loginSchema;
