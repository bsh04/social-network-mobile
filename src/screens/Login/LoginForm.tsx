import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native"
import {CustomInput} from "../../components/ui/Input/Input";
import {NativeSyntheticEvent, TextInputChangeEventData, Text, StyleSheet} from "react-native";
import {Icon} from 'react-native-elements';
import {LoginFormProps} from './LoginInterfaces'
import {CustomButton} from "../../components/ui/Button/Button";
import {colors, device} from "../../components/stylesheet";

export const LoginForm: React.FC<LoginFormProps> = ({handleSubmit, loading}) => {

    const navigation = useNavigation()

    const [login, setLogin] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [openPassword, setOpenPassword] = useState<boolean>(false)

    return (
        <>
            <CustomInput label={'login'} value={login}
                         onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setLogin(e.nativeEvent.text)}

            />
            <CustomInput label={'password'} value={password}
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
                onPress={() => handleSubmit({login, password})}
                loading={loading}
                containerStyle={{width: device.width * .5}}
            />
            <Text style={styles.text}>You haven't account?</Text>
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
        paddingTop: 20,
        paddingBottom: 10,
        color: colors.BlueLagoon,
        fontSize: 18
    }
})