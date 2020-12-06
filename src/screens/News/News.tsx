import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'

export const News: React.FC = () => {
    return (
        <>
            <Header title={'News'} isGoBack={false}/>
            <Text>News</Text>
        </>
    );
};