import {userSlice, userSelectors} from '../redux/slices/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useState} from "react";
import {UserValues} from '../types/interfaces'
import firebase from "firebase";
import {LoginFormValues} from "../screens/Login/LoginInterfaces";
import {Alert} from "react-native";

export const useLogin = () => {
    const dispatch = useDispatch()

    const {failAuth, startAuth, successAuth} = userSlice.actions

    const status = useSelector(userSelectors.getStatus())

    const auth = useCallback((payload: LoginFormValues) => {
        const {email, password} = payload
        if (email.trim() && password.trim()) {
            dispatch(startAuth())
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(res => {
                    if (res.user) {
                        const {email, uid, displayName, photoURL, phoneNumber} = res.user!
                        const userData = {
                            email, photoURL, phoneNumber, displayName, token: uid,
                        } as UserValues
                        dispatch(successAuth(userData))
                    }
                })
                .catch(e => {
                    dispatch(failAuth())
                })
        } else {
            Alert.alert(
                "Внимание",
                "Все поля должны быть заполнены"
            )
        }
    }, [dispatch])

    return {
        auth,
        status,
    }
}