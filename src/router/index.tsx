import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from './stacks'
import {DrawerNavigator} from './drawer/Drawer'
import {useSelector} from "react-redux"
import {userSelectors, userSlice} from "../redux/slices/userSlice"

export const Router: React.FC = () => {
    const userData = useSelector(userSelectors.getUser())
    const [token, setToken] = useState<string | undefined>(userData.token)

    useEffect(() => {
        setToken(userData.token || undefined)
    }, [userData])

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