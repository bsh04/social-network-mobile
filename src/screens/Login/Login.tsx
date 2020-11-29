import React, {useState} from 'react';
import {Text} from "react-native";
import {useNavigation} from '@react-navigation/native'
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {LoginForm} from "./LoginForm";
import {LoginFields} from './LoginInterfaces'

export const Login: React.FC = () => {

    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)

    const handleSubmit = ({login, password}: LoginFields) => {
        setLoading(true)
        setTimeout(() => {
            console.log('error')
            setLoading(false)
        }, 1000)
    }

    return (
        <>
            <Header title={'Login'} isGoBack={false}/>
            <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}}>
                <Card title={'Login'}>
                    {{
                        body: <LoginForm handleSubmit={handleSubmit} loading={loading}/>
                    }}
                </Card>
                {/*<Text onPress={() => navigation.navigate('Register')}>*/}
                {/*    Go to register Screen*/}
                {/*</Text>*/}
            </MainLayout>
        </>
    );
};