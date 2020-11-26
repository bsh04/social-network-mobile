import React from 'react';
import {Text} from "react-native";
import {useNavigation} from '@react-navigation/native'
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";

export const Login: React.FC = (props) => {

    const navigation = useNavigation()

    return (
        <>
            <Header title={'Login'} isGoBack={false}/>
            <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}}>
                <Text onPress={() => props}>
                    Login Screen
                </Text>
                <Text onPress={() => navigation.navigate('Register')}>
                    Go to register Screen
                </Text>
                <Text onPress={() => navigation.navigate('ResetPassword')}>
                    Go to reset password Screen
                </Text>
            </MainLayout>
        </>
    );
};