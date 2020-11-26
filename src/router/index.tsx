import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from './stacks/LoginStack'


export const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <LoginStack/>
        </NavigationContainer>
    )
}