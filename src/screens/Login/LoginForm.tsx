import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native"
import {CustomInput, CustomButton} from "../../components";
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
    Text,
    StyleSheet,
    TextInput,
    TextInputProps
} from "react-native";
import {Icon} from 'react-native-elements';
import {LoginFormProps} from './LoginInterfaces'
import {colors, device} from "../../components/stylesheet";

export const LoginForm: React.FC<LoginFormProps> = ({handleSubmit, loading}) => {

    const navigation = useNavigation()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [openPassword, setOpenPassword] = useState<boolean>(false)
    const passwordRef = useRef<TextInputProps & TextInput>(null)

    return (
        <>
            <CustomInput label={'E-mail'} value={email}
                         firstInput={true}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setEmail(e.nativeEvent.text)}
                         onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <CustomInput label={'Пароль'} value={password}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setPassword(e.nativeEvent.text)}
                         secureTextEntry={!openPassword}
                         rightIcon={<Icon name={openPassword ? "eye-with-line" : "eye"}
                                          type={"entypo"}
                                          color={colors.BlueLagoon}
                                          onPress={() => setOpenPassword(!openPassword)}/>}
                         ref={passwordRef}

            />
            <CustomButton
                title={'Войти'}
                buttonType={"success"}
                onPress={() => handleSubmit({email, password})}
                loading={loading}
                containerStyle={{width: device.width * .5}}
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
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 10,
        color: colors.BlueLagoon,
        fontSize: 18
    }
})