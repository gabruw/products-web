//#region Imports

import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

//#endregion

const defaultMaskOptions = {
    suffix: '',
    prefix: '',
    decimalLimit: 2,
    integerLimit: 7,
    decimalSymbol: '.',
    allowDecimal: true,
    allowNegative: false,
    allowLeadingZeroes: false,
    thousandsSeparatorSymbol: ',',
    includeThousandsSeparator: true
};

const DecimalMask = ({ inputRef, maskOptions, ...rest }) => {
    const mask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions
    });

    return (
        <MaskedInput
            {...rest}
            showMask
            mask={mask}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
        />
    );
};

export default DecimalMask;
