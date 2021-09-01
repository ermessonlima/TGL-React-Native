import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'
import Input from '../Input'
import { Container, Error } from './styles'
import { Control, Controller } from 'react-hook-form'

interface Props extends TextInputProps {
    control: Control,
    name: string,
    icon?: string,
    error: boolean
}

export default function InputForm({
    control,
    name,
    error,
    ...rest
}: Props) {
    return (
        <Container error={error}>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error && <Error>
                {error}
            </Error>}
        </Container>
    )

};
