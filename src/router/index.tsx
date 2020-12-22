import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {LoginStack} from './stacks'
import {DrawerNavigator} from './drawer/Drawer'
import {useDispatch, useSelector} from "react-redux"
import {loginSelectors, loginSlice} from "../redux/slices/loginSlice"
import firebase from "firebase";
import {UserValues} from "../types/interfaces";

export const Router: React.FC = () => {
    const dispatch = useDispatch()
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