import React, {useEffect} from 'react';
import {Alert, ScrollView} from "react-native";
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {RegisterForm} from './RegisterForm'
import {APIStatus} from "../../types/interfaces";
import {RegisterFields} from "./RegisterInterfaces";
import {useRegister} from "../../hooks/useRegister"

export const Register: React.FC = () => {
    const {register, message, status} = useRegister()

    const handleSubmit = ({...props}: RegisterFields) => {
        if (props.password.trim() && props.password.trim() && props.secondName.trim() && props.firstName.trim()) {
            register(props)
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
            <Header title={'Registration'} isGoBack={true}/>
            <ScrollView>
                <MainLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Registration'}>
                        {{
                            body: <RegisterForm handleSubmit={handleSubmit} loading={status === APIStatus.Loading}/>
                        }}
                    </Card>
                </MainLayout>
            </ScrollView>
        </>
    );
};