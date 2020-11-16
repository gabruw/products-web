//#region Imports

import DateField from 'components/DateField';
import React, { useMemo } from 'react';
import USER_FIELDS from 'utils/constants/field/user';
import USER_LABELS from 'utils/constants/label/user';

//#endregion

const FieldBirthDate = ({ errors }) => {
    const minimunDate = useMemo(() => {
        const today = new Date();
        return new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            new Date(today.getFullYear() - 18, today.getMonth(), 0).getDate() - today.getDate()
        );
    }, []);

    return <DateField errors={errors} minDate={minimunDate} name={USER_FIELDS.BIRTH} label={USER_LABELS.BIRTH} />;
};

export default FieldBirthDate;
