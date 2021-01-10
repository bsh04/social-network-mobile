import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {friendsSlice, friendsSelectors} from "../../../redux/slices/friendsSlice"
import {userSelectors} from "../../../redux/slices/userSlice"
import {mockFriends} from "../../../mockImages/mockUsers"

export const useFetchFriends = () => {
    const dispatch = useDispatch()
    const id = useSelector(userSelectors.getUserId())
    const {startFetch, failFetch, successFetch} = friendsSlice.actions

    const fetch = useCallback(() => {
        dispatch(startFetch())
        dispatch(successFetch(mockFriends))
    }, [dispatch])

    useEffect(() => {
        fetch()
    }, [])
}