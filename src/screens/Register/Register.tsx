import React, {useEffect} from 'react';
import {Alert, ScrollView} from "react-native";
import {Header} from "../../components/ui/Header/Header";
import {LoginLayout} from "../../components/layout/LoginLayout";
import {Card} from "../../components/ui/Card";
import {RegisterForm} from './RegisterForm'
import {APIStatus} from "../../types/interfaces";
import {RegisterFields} from "./RegisterInterfaces";
import {useRegister} from "../../hooks/useRegister"

export const Register: React.FC = () => {
    const {register, status} = useRegister()

    const handleSubmit = ({...props}: RegisterFields) => {
        if (props.password.trim() && props.password.trim() && props.secondName.trim() && props.firstName.trim()) {
            register(props)
        } else {
            Alert.alert(
                "Внимание",
                "Все поля должны быть заполнены"
            )
        }
    }

    useEffect(() => {
        if (status === APIStatus.Failure) {
            Alert.alert(
                "Ошибка",
                "Введите корректный E-mail",
            )
        }
    }, [status])

    return (
        <>
            <Header title={'Регистрация'} isGoBack={true}/>
            <ScrollView>
                <LoginLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Введите данные'}>
                        {{
                            body: <RegisterForm handleSubmit={handleSubmit} loading={status === APIStatus.Loading}/>
                        }}
                    </Card>
                </LoginLayout>
            </ScrollView>
        </>
    );
};