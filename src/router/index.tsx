import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from './stacks'
import {DrawerNavigator} from './drawer/Drawer'
import {useSelector} from "react-redux"
import {loginSelectors} from "../redux/slices/loginSlice"

export const Router: React.FC = () => {
    const userData = useSelector(loginSelectors.getUser())
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