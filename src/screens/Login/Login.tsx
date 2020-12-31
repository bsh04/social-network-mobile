import React, {useEffect} from 'react';
import {Header, Card, LoginLayout} from "../../components";
import {LoginForm} from "./LoginForm";
import {Alert, ScrollView} from "react-native";
import {useLogin} from '../../hooks'
import {APIStatus} from '../../types/interfaces'
import {LoginFormParams} from "./LoginInterfaces";

export const Login: React.FC = () => {
    const {status, auth} = useLogin()

    const handleSubmit = ({...props}: LoginFormParams) => {
        if (props.email.trim() && props.password.trim()) {
            auth(props)
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
                "Пользователя с такими данными нет",
            )
        }
    }, [status])

    return (
        <>
            <Header title={'Вход в профиль'} isGoBack={false}/>
            <ScrollView>
                <LoginLayout propsStyles={{alignItems: 'center', justifyContent: 'center'}} contentCenter={true}>
                    <Card title={'Введите данные'}>
                        {{
                            body: <LoginForm handleSubmit={handleSubmit} loading={status === APIStatus.Loading}/>
                        }}
                    </Card>
                </LoginLayout>
            </ScrollView>
        </>
    );
};