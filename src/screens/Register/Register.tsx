import React from 'react';
import {Text} from "react-native";
import {useNavigation} from '@react-navigation/native'
import {Header} from "../../components/ui/Header/Header";

export const Register: React.FC = () => {

    const navigation = useNavigation()

    return (
        <>
            <Header title={'Registration'} isGoBack={true}/>
            <Text>
                Register Screen
            </Text>
            <Text onPress={() => navigation.navigate('Login')}>
                Go to Login Screen
            </Text>
        </>
    );
};