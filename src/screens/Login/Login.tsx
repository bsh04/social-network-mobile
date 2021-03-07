import React, {useEffect} from 'react';
import {Header, Card, LoginLayout} from "../../components";
import {WrappedLoginForm} from "./LoginForm";
import {Alert, ScrollView} from "react-native";
import {useLogin} from '../../hooks'
import {APIStatus} from '../../types/interfaces'

export const Login: React.FC = () => {
    return (
        <>
            <Header title={'Вход в профиль'} isGoBack={false}/>
            <ScrollView>
                <LoginLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Введите данные'}>
                        {{
                            body: <WrappedLoginForm/>
                        }}
                    </Card>
                </LoginLayout>
            </ScrollView>
        </>
    );
};