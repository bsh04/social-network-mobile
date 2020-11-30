import {userSlice, userSelectors} from '../redux/slices/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback} from "react";
import {UserValues} from '../types/interfaces'

export const useLogin = () => {
    const dispatch = useDispatch()

    const {failAuth, startAuth, successAuth} = userSlice.actions

    const status = useSelector(userSelectors.getStatus())

    const auth = useCallback((payload: UserValues) => {
        dispatch(startAuth())

        // setTimeout(() => {
            dispatch(successAuth(payload))
        // }, 1000)
    }, [dispatch])

    return {
        auth,
        status,
    }
}