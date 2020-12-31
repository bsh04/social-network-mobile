import {loginSlice} from '../redux/slices/loginSlice'
import {useDispatch} from 'react-redux'
import {useCallback, useState} from "react";
import {APIStatus, UserValues} from '../types/interfaces'
import firebase from "firebase";
import {RegisterFields} from "../screens/Register/RegisterInterfaces";

export const useRegister = () => {
    const dispatch = useDispatch()

    const [status, setStatus] = useState<APIStatus>(APIStatus.Initial)

    const register = useCallback((payload: RegisterFields) => {
        setStatus(APIStatus.Loading)
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
                const user = res.user
                user?.updateProfile({
                    displayName: payload.firstName + " " + payload.secondName,
                }).then(() => {
                    user?.updatePassword(payload.password).then(() => {
                        if (user) {
                            const {email, phoneNumber, photoURL, displayName, uid} = user
                            const userData = {
                                email, photoURL, phoneNumber, displayName, token: uid
                            } as UserValues
                            dispatch(loginSlice.actions.successAuth(userData))
                            setStatus(APIStatus.Success)
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