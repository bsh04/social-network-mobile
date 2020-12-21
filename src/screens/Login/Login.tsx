import React, {useEffect} from 'react';
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {LoginForm} from "./LoginForm";
import {Alert, ScrollView} from "react-native";
import {useLogin} from '../../hooks'
import {APIStatus} from '../../types/interfaces'
import {LoginFormParams} from "./LoginInterfaces";

export const Login: React.FC = () => {
    const {status, auth, message} = useLogin()

    const handleSubmit = ({...props}: LoginFormParams) => {
        if (props.email.trim() && props.password.trim()) {
            auth(props)
        } else {
            Alert.alert(
                "Attention",
                "Fill in all the fields"
            )
        }
    }

    useEffect(() => {
        if (status === APIStatus.Failure) {
            Alert.alert(
                "Error",
                message,
            )
        }
    }, [status])

    return (
        <>
            <Header title={'Login'} isGoBack={false}/>
            <ScrollView>
                <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Login'}>
                        {{
                            body: <LoginForm handleSubmit={handleSubmit} loading={status === APIStatus.Loading}/>
                        }}
                    </Card>
                </MainLayout>
            </ScrollView>
        </>
    );
};