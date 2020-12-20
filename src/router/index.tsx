import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from './stacks'
import {DrawerNavigator} from './drawer/Drawer'
import {useDispatch, useSelector} from "react-redux"
import {userSelectors, userSlice} from "../redux/slices/userSlice"

export const Router: React.FC = () => {

    const dispatch = useDispatch()
    const userData = useSelector(userSelectors.getUser())
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        dispatch(userSlice.actions.setToken())
    }, [])

    useEffect(() => {
        setToken(userData.token || null)
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