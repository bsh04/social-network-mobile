import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../../screens'

const HomeNavigator = createStackNavigator()

export const HomeStack: React.FC = (props) => {
    return (
        <HomeNavigator.Navigator headerMode={"none"}>
            <HomeNavigator.Screen name={'Login'} component={Home}/>
        </HomeNavigator.Navigator>
    );
}