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
import {useHttp} from '../../api/auth'
import {useNavigation} from '@react-navigation/native'

export const Login: React.FC = () => {

    const navigation = useNavigation()
    const {status, auth} = useLogin()

    const user = useSelector(userSelectors.getUser())

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