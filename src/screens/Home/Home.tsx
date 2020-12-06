import React from 'react';
import {Text} from "react-native";
import {Header} from "../../components/ui/Header/Header";

export const Home: React.FC = () => {
    return (
        <>
            <Header title={'Home'} isGoBack={false}/>
            <Text>
                Home screen
            </Text>
        </>
    );
};