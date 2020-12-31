import React from 'react';
import {Text} from "react-native";
import {Header} from "../../components/ui/Header/Header";
import {InWorkScreen} from "../../components/ui/InWorkScreen/InWorkScreen";

export const Home: React.FC = () => {
    return (
        <>
            <Header title={'Главная'} isGoBack={false}/>
            <InWorkScreen/>
        </>
    );
};