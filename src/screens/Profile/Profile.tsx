import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Text} from 'react-native'

export const Profile: React.FC = () => {
    return (
        <>
            <Header title={'Profile'} isGoBack={false}/>
            <Text>Profile</Text>
        </>
    );
};