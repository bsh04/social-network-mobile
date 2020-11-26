import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Login} from '../../screens/Login/Login'
import {Register} from '../../screens/Register/Register'
import {ResetPassword} from '../../screens/Reset/ResetPassword'

const LoginNavigator = createStackNavigator()

export const LoginStack: React.FC = (props) => {
    return (
        <LoginNavigator.Navigator headerMode={"none"}>
            <LoginNavigator.Screen name={'Login'} component={Login}/>
            <LoginNavigator.Screen name={'Register'} component={Register}/>
            <LoginNavigator.Screen name={'ResetPassword'} component={ResetPassword}/>
        </LoginNavigator.Navigator>
    );
}