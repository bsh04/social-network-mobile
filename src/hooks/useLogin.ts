import {loginSlice, loginSelectors} from '../redux/slices/loginSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useState} from "react";
import {UserValues} from '../types/interfaces'
import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogin = () => {
    const dispatch = useDispatch()

    const {failAuth, startAuth, successAuth} = loginSlice.actions

    const status = useSelector(loginSelectors.getStatus())
    const [message, setMessage] = useState<string | undefined>(undefined)

    const auth = useCallback((payload) => {
        dispatch(startAuth())
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(res => {
                    const userData = {
                        email: res.user?.email,
                        photoURL: res.user?.photoURL,
                        phoneNumber: res.user?.phoneNumber,
                        displayName: res.user?.displayName,
                        token: res.user?.uid,
                    } as UserValues
                    if (res.user?.uid) {
                        AsyncStorage.setItem("@token", res.user.uid).then(() => dispatch(successAuth(userData)))
                    }
            })
                .catch(e => {
                    setMessage(e.message)
                    dispatch(failAuth())
                })

    }, [dispatch, message])

    return {
        auth,
        status,
        message
    }
}