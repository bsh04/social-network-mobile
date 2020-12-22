import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'

export const Dialogs: React.FC = () => {
    return (
        <>
            <Header title={'Диалоги'} isGoBack={false}/>
            <Text>Dialogs</Text>
        </>
    );
};