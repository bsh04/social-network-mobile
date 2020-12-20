import React, {useState} from 'react';
import {ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native"
import {Header} from "../../components/ui/Header/Header";
import {MainLayout} from "../../components/layout/MainLayout";
import {Card} from "../../components/ui/Card";
import {RegisterForm} from './RegisterForm'
import {useHttp} from "../../api/auth";
import {UserValues} from "../../types/interfaces";
import {RegisterFields} from "./RegisterInterfaces";

export const Register: React.FC = () => {

    const navigation = useNavigation()
    const {request} = useHttp()


    const [loading, setLoading] = useState(false)

    const handleSubmit = ({...props}: RegisterFields) => {
        const data = {
            name: String(props.firstName + " " + props.secondName),
            login: props.login,
            password: props.password
        }

        request("POST", '/api/auth/register', data)
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