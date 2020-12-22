import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native"
import {CustomInput} from "../../components/ui/Input/Input";
import {NativeSyntheticEvent, TextInputChangeEventData, Text, StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';
import {ResetPasswordProps} from './ResetPasswordInterfaces'
import {CustomButton} from "../../components/ui/Button/Button";
import {colors, device} from "../../components/stylesheet";

export const ResetPasswordForm: React.FC<ResetPasswordProps> = ({handleSubmit, loading}) => {

    const navigation = useNavigation()

    const [login, setLogin] = useState<string | undefined>("")

    return (
        <>
            <CustomInput label={'E-mail'} value={login}
                         firstInput={true}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setLogin(e.nativeEvent.text)}
                         additional={'Для сброса пароля мы отправим на Вашу почту одноразовый код'}

            />
            <CustomButton
                title={'Получить код'}
                buttonType={"success"}
                onPress={() => handleSubmit(login)}
                loading={loading}
                containerStyle={{width: device.width * .5, marginTop: 10}}
            />
            <Text style={styles.text}>Вы знаете свой пароль?</Text>
            <CustomButton
                title={'Войти'}
                buttonType={"info"}
                onPress={() => navigation.navigate('Login')}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={[styles.text, {paddingTop: 30}]}>У вас нет аккаунта?</Text>
            <CustomButton
                title={'Зарегистрироваться'}
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