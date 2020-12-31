import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'
import {InWorkScreen} from "../../components/ui/InWorkScreen/InWorkScreen";

export const News: React.FC = () => {
    return (
        <>
            <Header title={'Новости'} isGoBack={false}/>
            <InWorkScreen/>
        </>
    );
};