import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'
import {InWorkScreen} from "../../components/ui/InWorkScreen/InWorkScreen";

export const Channels: React.FC = () => {
    return (
        <>
            <Header title={'Каналы'} isGoBack={false}/>
            <InWorkScreen/>
        </>
    );
};