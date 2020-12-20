import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native"
import {CustomInput} from "../../components/ui/Input/Input";
import {NativeSyntheticEvent, TextInputChangeEventData, Text, StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';
import {LoginFormProps} from './LoginInterfaces'
import {CustomButton} from "../../components/ui/Button/Button";
import {colors, device} from "../../components/stylesheet";

export const LoginForm: React.FC<LoginFormProps> = ({handleSubmit, loading}) => {

    const navigation = useNavigation()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [openPassword, setOpenPassword] = useState<boolean>(false)

    return (
        <>
            <CustomInput label={'E-mail'} value={email}
                         firstInput={true}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setEmail(e.nativeEvent.text)}

            />
            <CustomInput label={'Password'} value={password}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setPassword(e.nativeEvent.text)}
                         secureTextEntry={!openPassword}
                         rightIcon={<Icon name={openPassword ? "eye-with-line" : "eye"}
                                          type={"entypo"}
                                          color={colors.BlueLagoon}
                                          onPress={() => setOpenPassword(!openPassword)}/>}
            />
            <CustomButton
                title={'Sing in'}
                buttonType={"success"}
                onPress={() => handleSubmit({email, password})}
                loading={loading}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={styles.text}>You forgot your password?</Text>
            <CustomButton
                title={'Reset password'}
                buttonType={"info"}
                onPress={() => navigation.navigate('ResetPassword')}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={[styles.text, {paddingTop: 30}]}>You haven't account?</Text>
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