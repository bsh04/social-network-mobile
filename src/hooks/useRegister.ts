import {loginSlice} from '../redux/slices/loginSlice'
import {useDispatch} from 'react-redux'
import {useCallback, useState} from "react";
import {APIStatus, UserValues} from '../types/interfaces'
import firebase from "firebase";
import {RegisterFields} from "../screens/Register/RegisterInterfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useRegister = () => {
    const dispatch = useDispatch()

    const [status, setStatus] = useState<APIStatus>(APIStatus.Initial)

    const register = useCallback((payload: RegisterFields) => {
        setStatus(APIStatus.Loading)
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
                res.user?.updateProfile({
                    displayName: payload.firstName + " " + payload.secondName,
                }).then(() => {
                    res.user?.updatePassword(payload.password).then(() => {
                        if (res.user?.uid) {
                            const userData = {
                                email: res.user?.email,
                                photoURL: res.user?.photoURL,
                                phoneNumber: res.user?.phoneNumber,
                                displayName: res.user?.displayName,
                                token: res.user?.uid,
                            } as UserValues
                            AsyncStorage.setItem("@token", res.user.uid).then(() => dispatch(loginSlice.actions.successAuth(userData))).then(() => {
                                setStatus(APIStatus.Success)
                            })
                        }
                    }).catch(() => {
                    })
                }).catch(() => {
                })
            })
            .catch(e => {
                setStatus(APIStatus.Failure)
            })

    }, [dispatch, status])

    return {
        register,
        status,
    }
}