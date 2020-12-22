import React from 'react';
import {ScrollView, Text} from "react-native";
import {Header} from "../../components/ui/Header/Header";
import {LoginLayout} from "../../components/layout/LoginLayout";
import {Card} from "../../components/ui/Card";
import {APIStatus} from "../../types/interfaces";
import {ResetPasswordForm} from "./ResetPasswordForm";

export const ResetPassword: React.FC = () => {

    const handleSubmit: (login?: string) => void = (login) => {
        console.log(login)
    }

    return (
        <>
            <Header title={'Сброс пароля'}/>
            <ScrollView>
                <LoginLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Введите E-mail'}>
                        {{
                            body: <ResetPasswordForm handleSubmit={handleSubmit}/>
                        }}
                    </Card>
                </LoginLayout>
            </ScrollView>
        </>
    );
};