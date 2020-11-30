import React, {useEffect} from 'react';
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {LoginForm} from "./LoginForm";
import {ScrollView} from "react-native";
import {useLogin} from '../../hooks'
import {userSelectors} from '../../redux/slices/userSlice'
import {APIStatus, UserValues} from '../../types/interfaces'
import {useSelector} from "react-redux";

export const Login: React.FC = () => {

    const {status, auth} = useLogin()
    const user = useSelector(userSelectors.getUser())

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleSubmit = ({...props}: UserValues) => {
        auth(props)
    }

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