import React from 'react';
import {Input, InputProps} from 'react-native-elements'

export const CustomInput: React.FC<InputProps> = ({onChange, label, value, onSubmitEditing}) => (
    <Input
        onChange={onChange}
        label={label}
        value={value}
        onSubmitEditing={onSubmitEditing}
    />
)
