import {userSlice} from '../redux/slices/userSlice'
import {useDispatch} from 'react-redux'
import {useCallback, useState} from "react";
import {APIStatus, UserValues} from '../types/interfaces'
import firebase from "firebase";
import {RegisterFields} from "../screens/Register/RegisterInterfaces";

export const useRegister = () => {
    const dispatch = useDispatch()

    const [status, setStatus] = useState<APIStatus>(APIStatus.Initial)

    const register = useCallback((payload: RegisterFields) => {
        const {password, secondName, firstName, email} = payload
        setStatus(APIStatus.Loading)
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user
                user?.updateProfile({
                    displayName: firstName + " " + secondName,
                }).then(() => {
                    user?.updatePassword(password).then(() => {
                        if (user) {
                            const {email, phoneNumber, photoURL, displayName, uid} = user
                            const userData = {
                                email, photoURL, phoneNumber, displayName, token: uid
                            } as UserValues
                            dispatch(userSlice.actions.successAuth(userData))
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