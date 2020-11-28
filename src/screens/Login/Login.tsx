import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData, Text} from "react-native";
import {useNavigation} from '@react-navigation/native'
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {CustomInput} from "../../components/ui/Input/Input";
import {Icon} from "react-native-elements";

export const Login: React.FC = () => {

    const navigation = useNavigation()

    const [value, setValue] = useState<string | undefined>("")
    const [value2, setValue2] = useState<string | undefined>("")
    const [openPassword, setOpenPassword] = useState<boolean>(false)

    return (
        <>
            <Header title={'Login'} isGoBack={false} />
            <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}}>
                <Card title={'Login'}>
                    {{
                        body: (
                            <>
                                <CustomInput label={'login'} value={value}
                                             onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setValue(e.nativeEvent.text)}

                                />
                                <CustomInput label={'password'} value={value2}
                                             onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setValue2(e.nativeEvent.text)}
                                             secureTextEntry={!openPassword}
                                             rightIcon={<Icon name={openPassword ? "eye-with-line" : "eye"}
                                                              type={"entypo"}
                                                              onPress={() => setOpenPassword(!openPassword)}/>}
                                />
                            </>
                        )
                    }}
                </Card>
                {/*<Text onPress={() => props}>*/}
                {/*    Login Screen*/}
                {/*</Text>*/}
                <Text onPress={() => navigation.navigate('Register')}>
                    Go to register Screen
                </Text>
                {/*<Text onPress={() => navigation.navigate('ResetPassword')}>*/}
                {/*    Go to reset password Screen*/}
                {/*</Text>*/}
            </MainLayout>
        </>
    );
};