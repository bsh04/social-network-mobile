import {userSlice, userSelectors} from '../redux/slices/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useState} from "react";
import {UserValues} from '../types/interfaces'
import firebase from "firebase";

export const useLogin = () => {
    const dispatch = useDispatch()

    const {failAuth, startAuth, successAuth} = userSlice.actions

    const status = useSelector(userSelectors.getStatus())
    const [message, setMessage] = useState<string | undefined>(undefined)

    const auth = useCallback((payload: UserValues) => {
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
                        password: res.user?.providerId
                    } as UserValues
                    dispatch(successAuth(userData))
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