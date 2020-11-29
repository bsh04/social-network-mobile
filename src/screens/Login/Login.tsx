import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native"
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {LoginForm} from "./LoginForm";
import {LoginFields} from './LoginInterfaces'
import {ScrollView} from "react-native";

export const Login: React.FC = () => {

    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)

    const handleSubmit = ({...props}: LoginFields) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <>
            <Header title={'Login'} isGoBack={false}/>
            <ScrollView>
                <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Login'}>
                        {{
                            body: <LoginForm handleSubmit={handleSubmit} loading={loading}/>
                        }}
                    </Card>

                </MainLayout>
            </ScrollView>
        </>
    );
};