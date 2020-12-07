import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import {News} from '../../screens'

const NewsNavigator = createStackNavigator()

export const NewsStack: React.FC = () => {
    return (
        <NewsNavigator.Navigator headerMode={"none"}>
            <NewsNavigator.Screen name={'News'} component={News}/>
        </NewsNavigator.Navigator>
    )
}