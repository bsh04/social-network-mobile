import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Profile} from '../../screens'

const ProfileNavigator = createStackNavigator()

export const ProfileStack: React.FC = (props) => {
    return (
        <ProfileNavigator.Navigator headerMode={"none"}>
            <ProfileNavigator.Screen name={'Profile'} component={Profile}/>
        </ProfileNavigator.Navigator>
    );
}