import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {classmatesSlice, classmatesSelectors} from "../redux/slices/classmatesSlice"
import {userSelectors} from "../redux/slices/userSlice"
import {mockClassmates} from "../mockImages/mockUsers"

export const useFetchClassmates = () => {
    const dispatch = useDispatch()
    const id = useSelector(userSelectors.getUserId())
    const {startFetch, failFetch, successFetch} = classmatesSlice.actions

    const fetch = useCallback(() => {
        dispatch(startFetch())
        dispatch(successFetch(mockClassmates))
    }, [dispatch])

    useEffect(() => {
        fetch()
    }, [])
}