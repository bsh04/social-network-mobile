import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {friendsSlice, friendsSelectors} from "../../../redux/slices/friendsSlice"
import {userSelectors} from "../../../redux/slices/userSlice"
import {Friends} from "../../../types/interfaces"

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

const mockFriends = [
    {
        id: 2,
        avatar: require("../../../mockImages/avatars/2.png"),
        name: "Неля Основа"
    },
    {
        id: 3,
        avatar: require("../../../mockImages/avatars/3.png"),
        name: "Илья Николаев"
    },
    {
        id: 4,
        avatar: require("../../../mockImages/avatars/8.png"),
        name: "Маргарита Синина"
    },
    {
        id: 5,
        avatar: require("../../../mockImages/avatars/5.png"),
        name: "Иван Дон"
    },
    {
        id: 6,
        avatar: require("../../../mockImages/avatars/6.png"),
        name: "Василий Гришин"
    },
    {
        id: 7,
        avatar: require("../../../mockImages/avatars/7.png"),
        name: "Светлана Зинина"
    },
    {
        id: 8,
        avatar: require("../../../mockImages/avatars/8.png"),
        name: "Дмитрий Крюков"
    },
    {
        id: 9,
        avatar: require("../../../mockImages/avatars/5.png"),
        name: "Евгений Фролов"
    },
    {
        id: 10,
        avatar: require("../../../mockImages/avatars/4.png"),
        name: "Никита Уваров"
    },
] as Array<Friends>