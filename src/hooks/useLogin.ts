import {loginSlice, loginSelectors} from '../redux/slices/loginSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useState} from "react";
import {UserValues} from '../types/interfaces'
import firebase from "firebase";

export const useLogin = () => {
    const dispatch = useDispatch()

    const {failAuth, startAuth, successAuth} = loginSlice.actions

    const status = useSelector(loginSelectors.getStatus())

    const auth = useCallback((payload) => {
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

    }, [dispatch])

    return {
        auth,
        status,
    }
}