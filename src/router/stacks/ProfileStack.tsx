import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Profile, Settings, UserData, ChangeUserData} from '../../screens'

const ProfileNavigator = createStackNavigator()

const ProfileStack: React.FC = (props) => {
    return (
        <ProfileNavigator.Navigator headerMode={"none"}>
            <ProfileNavigator.Screen name={'Profile'} component={Profile}/>
            <ProfileNavigator.Screen name={'Settings'} component={Settings}/>
            <ProfileNavigator.Screen name={'UserData'} component={UserData}/>
            <ProfileNavigator.Screen name={'ChangeUserData'} component={ChangeUserData}/>
        </ProfileNavigator.Navigator>
    );
}

export default ProfileStack