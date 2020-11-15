//#region Imports

import ERROR_MESSAGES from 'utils/constants/error/yup';
import * as yup from 'yup';
import isCPFValid from './cpf';

//#endregion

/**
 * Validações
 */
const validateIfNotEmpty = (callback) => (val) => (val ? callback(val) : true);

const cpf = (message) => yup.string().test('cpf', message || ERROR_MESSAGES.CPF, validateIfNotEmpty(isCPFValid));
yup.addMethod(yup.string, 'cpf', cpf);

/**
 * Conversores
 */
export const emptyStringToUndefined = (value, originalValue) => {
    if ((typeof originalValue === 'string' && originalValue === '') || originalValue === null) {
        return undefined;
    }

    return value;
};

/**
 * Tradução
 */
yup.setLocale({
    mixed: {
        required: 'O campo é obrigatório'
    },
    string: {
        min: 'O campo deve ter no mínimo ${min} caracteres',
        max: 'O campo deve ter no máximo ${max} caracteres',
        email: 'O e-mail é inválido'
    },
    number: {
        min: 'O campo deve ter o valor maior que ${min}',
        max: 'O campo deve ter o valor menor que ${max}'
    }
});

export default yup;
