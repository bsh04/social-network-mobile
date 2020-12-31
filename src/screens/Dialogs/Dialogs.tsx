import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'
import {InWorkScreen} from "../../components/ui/InWorkScreen/InWorkScreen";

export const Dialogs: React.FC = () => {
    return (
        <>
            <Header title={'Диалоги'} isGoBack={false}/>
            <InWorkScreen/>
        </>
    );
};