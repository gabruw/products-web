//#region Imports

import LOGIN_FIELDS from 'utils/constants/field/login';
import USER_FIELDS from 'utils/constants/field/user';

//#endregion

const formatUserToEdit = (user, data) => {
    return {
        ...user,
        [USER_FIELDS.NAME]: data[USER_FIELDS.NAME],
        [LOGIN_FIELDS.PASSWORD]: data[LOGIN_FIELDS.PASSWORD]
    };
};

export default formatUserToEdit;
