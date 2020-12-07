import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from './stacks'
import {DrawerNavigator} from './drawer/Drawer'
import {userSelectors} from '../redux/slices/userSlice'
import {useSelector} from 'react-redux'

export const Router: React.FC = () => {

    const {token} = useSelector(userSelectors.getUser())

    console.log(token)

    return (
        <NavigationContainer>
            {
                token
                    ?
                    <DrawerNavigator/>
                    :
                    <LoginStack/>
            }
        </NavigationContainer>
    )
}