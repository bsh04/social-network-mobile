import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {classmatesSlice, classmatesSelectors} from "../../../redux/slices/classmatesSlice"
import {userSelectors} from "../../../redux/slices/userSlice"
import {Persons} from "../../../types/interfaces"

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

const mockClassmates = [
    {
        id: 2,
        avatar: require("../../../mockImages/avatars/5.png"),
        name: "Сергей Крылов"
    },
    {
        id: 3,
        avatar: require("../../../mockImages/avatars/6.png"),
        name: "Кирилл Петров"
    },
    {
        id: 4,
        name: "Маргарита Синина"
    },
    {
        id: 5,
        avatar: require("../../../mockImages/avatars/4.png"),
        name: "Денис Куприн"
    },
    {
        id: 6,
        avatar: require("../../../mockImages/avatars/7.png"),
        name: "Гриша Рисов"
    },
    {
        id: 7,
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
    {
        id: 11,
        avatar: require("../../../mockImages/avatars/5.png"),
        name: "Иван Дон"
    },
    {
        id: 12,
        avatar: require("../../../mockImages/avatars/6.png"),
        name: "Василий Гришин"
    },
    {
        id: 13,
        avatar: require("../../../mockImages/avatars/7.png"),
        name: "Светлана Зинина"
    },
    {
        id: 14,
        avatar: require("../../../mockImages/avatars/8.png"),
        name: "Дмитрий Крюков"
    },
    {
        id: 15,
        avatar: require("../../../mockImages/avatars/5.png"),
        name: "Евгений Фролов"
    },
    {
        id: 16,
        avatar: require("../../../mockImages/avatars/4.png"),
        name: "Никита Уваров"
    },
] as Array<Persons>