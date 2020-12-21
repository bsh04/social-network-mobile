import {loginSlice} from '../redux/slices/loginSlice'
import {useDispatch} from 'react-redux'
import {useCallback, useState} from "react";
import {APIStatus, UserValues} from '../types/interfaces'
import firebase from "firebase";
import {RegisterFields} from "../screens/Register/RegisterInterfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useRegister = () => {
    const dispatch = useDispatch()

    const {failAuth, successAuth} = loginSlice.actions

    const [status, setStatus] = useState<APIStatus>(APIStatus.Initial)
    const [message, setMessage] = useState<string | undefined>(undefined)

    const register = useCallback((payload: RegisterFields) => {
        setStatus(APIStatus.Loading)
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
                res.user?.updateProfile({
                    displayName: payload.firstName + " " + payload.secondName
                }).then(() => {
                    if (res.user?.uid) {
                        const userData = {
                            email: res.user?.email,
                            displayName: res.user?.displayName,
                            token: res.user?.uid,
                            password: res.user?.providerId
                        } as UserValues
                        AsyncStorage.setItem("@token", res.user.uid).then(() => dispatch(successAuth(userData))).then(() => {
                            setStatus(APIStatus.Success)
                        })
                    }
                }).catch(() => {})
            })
            .catch(e => {
                setMessage(e.message)
                setStatus(APIStatus.Failure)
            })

    }, [dispatch, message, status])

    return {
        register,
        status,
        message
    }
}