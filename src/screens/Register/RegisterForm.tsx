import React, {useRef, useState} from 'react';
import {CustomInput} from "../../components/ui/Input/Input";
import {
    Alert,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TextInputChangeEventData,
    TextInputEndEditingEventData, TextInputProps, TextInputState, TextInputSubmitEditingEventData
} from "react-native";
import {Icon} from "react-native-elements";
import {colors, device} from "../../components/stylesheet";
import {CustomButton} from "../../components/ui/Button/Button";
import {useNavigation} from "@react-navigation/native";
import {RegisterFormProps} from './RegisterInterfaces'

export const RegisterForm: React.FC<RegisterFormProps> = ({handleSubmit, loading}) => {

    const navigation = useNavigation()

    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [openPasswords, setOpenPasswords] = useState<Array<boolean>>([false, false])

    const secondNameRef = useRef<TextInputProps & TextInput>(null)
    const emailRef = useRef<TextInputProps & TextInput>(null)
    const passwordRef = useRef<TextInputProps & TextInput>(null)
    const confPasswordRef = useRef<TextInputProps & TextInput>(null)

    const validator = () => {
        if (password !== confirmPassword) {
            Alert.alert("Ошибка", "Пароли не совпадают")
            return
        }
        handleSubmit({firstName, secondName, email, password})
    }

    return (
        <>
            <CustomInput label={'Имя'} value={firstName}
                         firstInput={true}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setFirstName(e.nativeEvent.text)}
                         onSubmitEditing={() => secondNameRef.current?.focus()}
            />
            <CustomInput label={'Фамилия'} value={secondName}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setSecondName(e.nativeEvent.text)}
                         ref={secondNameRef}
                         onSubmitEditing={() => emailRef.current?.focus()}
            />
            <CustomInput label={'E-mail'} value={email}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setEmail(e.nativeEvent.text)}
                         ref={emailRef}
                         onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <CustomInput label={'Пароль'} value={password}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setPassword(e.nativeEvent.text)}
                         secureTextEntry={!openPasswords[0]}
                         rightIcon={<Icon name={openPasswords[0] ? "eye-with-line" : "eye"}
                                          type={"entypo"}
                                          color={colors.BlueLagoon}
                                          onPress={() => setOpenPasswords([!openPasswords[0], openPasswords[1]])}/>}
                         ref={passwordRef}
                         onSubmitEditing={() => confPasswordRef.current?.focus()}
            />
            <CustomInput label={'Повторите пароль'} value={confirmPassword}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setConfirmPassword(e.nativeEvent.text)}
                         secureTextEntry={!openPasswords[1]}
                         rightIcon={<Icon name={openPasswords[1] ? "eye-with-line" : "eye"}
                                          type={"entypo"}
                                          color={colors.BlueLagoon}
                                          onPress={() => setOpenPasswords([openPasswords[0], !openPasswords[1]])}/>}
                         ref={confPasswordRef}
            />
            <CustomButton
                title={'Зарегистрироваться'}
                buttonType={"success"}
                onPress={() => validator()}
                loading={loading}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={styles.text}>У вас есть аккаунт?</Text>
            <CustomButton
                title={'Войти'}
                buttonType={"primary"}
                onPress={() => navigation.navigate('Login')}
                containerStyle={{width: device.width * .5}}
            />
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        color: colors.BlueLagoon,
        fontSize: 18
    }
})