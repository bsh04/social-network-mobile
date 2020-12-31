import React from 'react';
import {View} from "react-native";
import {Header} from "../../components/ui/Header/Header";
import {InWorkScreen} from "../../components/ui/InWorkScreen/InWorkScreen";


export const Settings: React.FC = () => {
    return (
        <>
            <Header title={"Settings"} />
            <InWorkScreen/>
        </>
    );
};