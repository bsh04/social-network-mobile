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
            <CustomInput label={'Login'} value={login}
                         firstInput={true}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setLogin(e.nativeEvent.text)}
                         additional={'To reset your password, we will send a one-time code to your mail'}

            />
            <CustomButton
                title={'Get code'}
                buttonType={"success"}
                onPress={() => handleSubmit(login)}
                loading={loading}
                containerStyle={{width: device.width * .5, marginTop: 10}}
            />
            <Text style={styles.text}>Do you know your password?</Text>
            <CustomButton
                title={'Reset password'}
                buttonType={"info"}
                onPress={() => navigation.navigate('ResetPassword')}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={[styles.text, {paddingTop: 30}]}>Do you want to create a new account?</Text>
            <CustomButton
                title={'Registration'}
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