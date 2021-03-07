import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native"
import {CustomInput, CustomButton} from "../../components";
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
    Text,
    StyleSheet,
    TextInput,
    TextInputBase,
    TextInputProps,
    View, Alert,
} from "react-native";
import {Icon} from 'react-native-elements';
import {LoginFormProps, LoginFormValues} from './LoginInterfaces'
import {colors, device} from "../../components/stylesheet";
import {formValueSelector, Field, getFormValues, InjectedFormProps, reduxForm, change, submit} from "redux-form"
import {useDispatch, useSelector} from "react-redux";
import {FORM} from "../../types/types";
import {useLogin} from "../../hooks";
import {APIStatus} from "../../types/interfaces";

const LoginForm: React.FC<LoginFormProps & InjectedFormProps<LoginFormValues, LoginFormProps>> = ({handleSubmit}) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {status, auth} = useLogin()

    const [openPassword, setOpenPassword] = useState<boolean>(false)
    const passwordRef = useRef<TextInputProps & TextInput>(null)
    const data = useSelector(getFormValues(FORM.login))

    const handleChange = (field: string) => (value: string) => {
        dispatch(change(FORM.login, field, value))
    }

    useEffect(() => {
        if (status === APIStatus.Failure) {
            Alert.alert(
                "Ошибка",
                "Пользователя с такими данными нет",
            )
        }
    }, [status])

    return (
        <View>
            <Field
                component={CustomInput}
                name="email"
                label="E-mail"
                firstInput
            />
            <Field
                component={CustomInput}
                name="password"
                label="Пароль"
                secureTextEntry={!openPassword}
                rightIcon={<Icon name={openPassword ? "eye-with-line" : "eye"}
                                 type={"entypo"}
                                 color={colors.BlueLagoon}
                                 onPress={() => setOpenPassword(!openPassword)}/>}
            />
            <CustomButton
                title={'Войти'}
                buttonType={"success"}
                loading={status === APIStatus.Loading}
                containerStyle={{width: device.width * .5}}
                onPress={handleSubmit(auth)}
            />
            <Text style={styles.text}>Вы забыли свой пароль?</Text>
            <CustomButton
                title={'Сбросить пароль'}
                buttonType={"info"}
                onPress={() => navigation.navigate('ResetPassword')}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={[styles.text, {paddingTop: 30}]}>У вас нет аккаунта?</Text>
            <CustomButton
                title={'Регистрация'}
                buttonType={"primary"}
                onPress={() => navigation.navigate('Register')}
                containerStyle={{width: device.width * .5}}
            />
        </View>
    );
};

export const WrappedLoginForm = reduxForm<LoginFormValues, LoginFormProps>({
    form: FORM.login
})(LoginForm)


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 10,
        color: colors.BlueLagoon,
        fontSize: 18
    }
})