import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {teachersSlice, teachersSelectors} from "../redux/slices/teachersSlice"
import {userSelectors} from "../redux/slices/userSlice"
import {mockTeachers} from "../mockImages/mockUsers"

export const useFetchTeachers = () => {
    const dispatch = useDispatch()
    const id = useSelector(userSelectors.getUserId())
    const {startFetch, failFetch, successFetch} = teachersSlice.actions

    const fetch = useCallback(() => {
        dispatch(startFetch())
        dispatch(successFetch(mockTeachers))
    }, [dispatch])

    useEffect(() => {
        fetch()
    }, [])
}