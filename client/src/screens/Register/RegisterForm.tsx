import React, {useState} from 'react';
import {CustomInput} from "../../components/ui/Input/Input";
import {NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData} from "react-native";
import {Icon} from "react-native-elements";
import {colors, device} from "../../components/stylesheet";
import {CustomButton} from "../../components/ui/Button/Button";
import {useNavigation} from "@react-navigation/native";
import {RegisterFormProps} from './RegisterInterfaces'

export const RegisterForm: React.FC<RegisterFormProps> = ({handleSubmit, loading}) => {

    const navigation = useNavigation()

    const [firstName, setFirstName] = useState<string | undefined>('')
    const [secondName, setSecondName] = useState<string | undefined>('')
    const [login, setLogin] = useState<string | undefined>('')
    const [password, setPassword] = useState<string | undefined>('')
    const [confirmPassword, setConfirmPassword] = useState<string | undefined>('')
    const [openPasswords, setOpenPasswords] = useState<Array<boolean>>([false, false])

    return (
        <>
            <CustomInput label={'First name'} value={firstName}
                         firstInput={true}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setFirstName(e.nativeEvent.text)}

            />
            <CustomInput label={'Second name'} value={secondName}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setSecondName(e.nativeEvent.text)}

            />
            <CustomInput label={'Login'} value={login}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setLogin(e.nativeEvent.text)}

            />
            <CustomInput label={'Password'} value={password}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setPassword(e.nativeEvent.text)}
                         secureTextEntry={!openPasswords[0]}
                         rightIcon={<Icon name={openPasswords[0] ? "eye-with-line" : "eye"}
                                          type={"entypo"}
                                          color={colors.BlueLagoon}
                                          onPress={() => setOpenPasswords([!openPasswords[0], openPasswords[1]])}/>}
            />
            <CustomInput label={'Confirm password'} value={confirmPassword}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setConfirmPassword(e.nativeEvent.text)}
                         secureTextEntry={!openPasswords[1]}
                         rightIcon={<Icon name={openPasswords[1] ? "eye-with-line" : "eye"}
                                          type={"entypo"}
                                          color={colors.BlueLagoon}
                                          onPress={() => setOpenPasswords([openPasswords[0], !openPasswords[1]])}/>}
            />
            <CustomButton
                title={'Registration'}
                buttonType={"success"}
                onPress={() => handleSubmit({firstName, login, password, secondName})}
                loading={loading}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={styles.text}>You have account?</Text>
            <CustomButton
                title={'Login'}
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