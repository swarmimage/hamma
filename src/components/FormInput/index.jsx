import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    FormErrorMessage,
    Switch,
    Grid,
    GridItem,
    Flex,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

const languages = [
    { code: 'uz', label: 'O‘zbek' },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
];

const formatNumberWithSpaces = (value) => {
    if (!value) return '';
    const [integer, decimal] = value.toString().split('.');
    const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return decimal ? `${formatted}.${decimal}` : formatted;
};

const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 12);
    let result = '+';

    if (digits.startsWith('998')) {
        const national = digits.slice(3);
        result += '998';

        if (national.length > 0) result += ' ' + national.slice(0, 2);
        if (national.length > 2) result += ' ' + national.slice(2, 5);
        if (national.length > 5) result += ' ' + national.slice(5, 7);
        if (national.length > 7) result += ' ' + national.slice(7, 9);
    } else {
        result += digits;
    }

    return result;
};

export const FormInput = ({
    control,
    required = false,
    name,
    inputProps = {},
    disabled = false,
    inputLeftElement,
    inputRightElement,
    defaultValue = '',
    placeholder = '',
    autoFocus = false,
    type = 'text',
    onHandleChange,
    label,
    options = [],
    maxLength,
    multiLanguage = false,
    ...props
}) => {
    const inputTypes = ['text', 'number', 'email', 'color', 'date', 'phone'];

    const renderInputField = (fieldName, langLabel = '') => (
        <Controller
            key={fieldName}
            name={fieldName}
            control={control}
            defaultValue={type === 'phone' ? '+998' : defaultValue}
            rules={{ required }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl isInvalid={!!error} isRequired={required}>
                    <FormLabel fontSize={'12px'} htmlFor={fieldName}>
                        {label} {langLabel && `(${langLabel})`}
                    </FormLabel>
                    <InputGroup>
                        {inputLeftElement && <InputLeftElement>{inputLeftElement}</InputLeftElement>}
                        <Input
                            {...props}
                            id={fieldName}
                            value={
                                type === 'number'
                                    ? formatNumberWithSpaces(value)
                                    : type === 'phone'
                                        ? formatPhoneNumber(value)
                                        : value
                            }
                            onChange={(e) => {
                                let rawValue = e.target.value;
                                if (type === 'number') {
                                    rawValue = rawValue.replace(/\s/g, '');
                                    if (/^\d*\.?\d*$/.test(rawValue)) {
                                        onChange(rawValue);
                                        onHandleChange?.(rawValue, fieldName);
                                    }
                                } else if (type === 'phone') {
                                    rawValue = rawValue.replace(/\D/g, '').slice(0, 12);
                                    if (!rawValue.startsWith('998')) rawValue = '998' + rawValue;
                                    onChange('+' + rawValue);
                                    onHandleChange?.('+' + rawValue, fieldName);
                                } else {
                                    onChange(rawValue);
                                    onHandleChange?.(rawValue, fieldName);
                                }
                            }}
                            placeholder={placeholder}
                            autoFocus={autoFocus}
                            disabled={disabled}
                            type={type === 'color' ? 'color' : 'text'}
                            inputMode={type === 'number' || type === 'phone' ? 'numeric' : undefined}
                            maxLength={maxLength}
                            border="1px solid #e7e7e7e7"
                            {...inputProps}
                        />
                        {inputRightElement && <InputRightElement>{inputRightElement}</InputRightElement>}
                    </InputGroup>
                    <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
            )}
        />
    );

    const renderStandardField = (fieldName) => (
        <Controller
            name={fieldName}
            control={control}
            defaultValue={type === 'phone' ? '+998' : defaultValue}
            rules={{ required }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl isInvalid={!!error} isRequired={required}>
                    <FormLabel htmlFor={fieldName}>{label}</FormLabel>
                    <InputGroup>
                        {inputLeftElement && <InputLeftElement>{inputLeftElement}</InputLeftElement>}

                        {inputTypes.includes(type) && (
                            <Input
                                {...props}
                                id={fieldName}
                                value={
                                    type === 'number'
                                        ? formatNumberWithSpaces(value)
                                        : type === 'phone'
                                            ? formatPhoneNumber(value)
                                            : value
                                }
                                onChange={(e) => {
                                    let rawValue = e.target.value;
                                    if (type === 'number') {
                                        rawValue = rawValue.replace(/\s/g, '');
                                        if (/^\d*\.?\d*$/.test(rawValue)) {
                                            onChange(rawValue);
                                            onHandleChange?.(rawValue);
                                        }
                                    } else if (type === 'phone') {
                                        rawValue = rawValue.replace(/\D/g, '').slice(0, 12);
                                        if (!rawValue.startsWith('998')) rawValue = '998' + rawValue;
                                        onChange('+' + rawValue);
                                        onHandleChange?.('+' + rawValue);
                                    } else {
                                        onChange(rawValue);
                                        onHandleChange?.(rawValue);
                                    }
                                }}
                                placeholder={placeholder}
                                autoFocus={autoFocus}
                                disabled={disabled}
                                type={['color', 'date'].includes(type) ? type : 'text'}
                                inputMode={type === 'number' || type === 'phone' ? 'numeric' : undefined}
                                maxLength={maxLength}
                                border="1px solid #e7e7e7e7"
                                {...inputProps}
                            />
                        )}

                        {type === 'select' && (
                            <Select
                                id={fieldName}
                                value={value}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                    onHandleChange?.(e.target.value);
                                    onChange(e.target.value);
                                    onHandleChange?.(e.target.value);
                                }}
                                placeholder={placeholder}
                                disabled={disabled}
                                {...inputProps}
                            >
                                <option hidden>Выберите один из вариантов</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </Select>
                        )}

                        {type === 'multiselect' && (
                            <ReactSelect
                                isMulti
                                isDisabled={disabled}
                                options={options}
                                value={options.filter((opt) => value?.includes(opt.value))}
                                onChange={(selected) => {
                                    const selectedValues = (selected || []).map((opt) => opt.value);
                                    onChange(selectedValues);
                                    onHandleChange?.(selectedValues);
                                }}
                                placeholder="Выберите один из вариантов"
                                styles={{
                                    container: (base) => ({ ...base, width: '100%' }),
                                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                }}
                                menuPortalTarget={typeof document !== 'undefined' ? document.body : undefined}
                                {...inputProps}
                            />
                        )}

                        {type === 'boolean' && (
                            <Switch
                                id={fieldName}
                                name={fieldName}
                                isChecked={value}
                                onChange={(e) => {
                                    onChange(e.target.checked);
                                    onHandleChange?.(e.target.checked);
                                }}
                                readOnly={disabled}
                                placeholder={placeholder}
                                required={required}
                                backgroundColor="#FFF"
                                {...inputProps}
                                {...props}
                                fontSize="15px"
                                border="1px solid rgba(0, 0, 0, 0.1)"
                                _placeholder={{
                                    color: '#AFAFAF',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                }}
                            />
                        )}

                        {inputRightElement && <InputRightElement>{inputRightElement}</InputRightElement>}
                    </InputGroup>
                    <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
            )}
        />
    );

    if (multiLanguage && inputTypes.includes(type)) {
        return (
            <Grid w={'100%'} alignItems={'center'} templateColumns="repeat(3, 1fr)" gap={4}>
                {languages.map((lang) => (
                    <GridItem key={lang.code}>
                        {renderInputField(`${name}_${lang.code}`, lang.label)}
                    </GridItem>
                ))}
            </Grid>
        );
    }

    return renderStandardField(name);
};
