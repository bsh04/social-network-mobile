import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'

export const Camera:React.FC = () => {
    return (
        <>
            <Header title={'Камера'} isGoBack={false}/>
            <Text>Camera</Text>
        </>
    );
};