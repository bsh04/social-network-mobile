import React from 'react';
import {ScrollView, Text} from "react-native";
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {APIStatus} from "../../types/interfaces";
import {ResetPasswordForm} from "./ResetPasswordForm";

export const ResetPassword: React.FC = () => {

    const handleSubmit: (login?: string) => void = (login) => {
        console.log(login)
    }

    return (
        <>
            <Header title={'Reset password'}/>
            <ScrollView>
                <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Reset password'}>
                        {{
                            body: <ResetPasswordForm handleSubmit={handleSubmit}/>
                        }}
                    </Card>
                </MainLayout>
            </ScrollView>
        </>
    );
};