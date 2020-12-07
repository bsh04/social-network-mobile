import React, {useState} from 'react';
import {ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native"
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {RegisterForm} from './RegisterForm'

export const Register: React.FC = () => {

    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        setLoading(true)
        setTimeout(() => {
            navigation.goBack()
        }, 1000)
    }

    return (
        <>
            <Header title={'Registration'} isGoBack={true}/>
            <ScrollView>
                <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Registration'}>
                        {{
                            body: <RegisterForm handleSubmit={handleSubmit} loading={loading}/>
                        }}
                    </Card>
                </MainLayout>
            </ScrollView>
        </>
    );
};