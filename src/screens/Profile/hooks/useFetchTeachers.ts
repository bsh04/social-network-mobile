import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {teachersSlice, teachersSelectors} from "../../../redux/slices/teachersSlice"
import {userSelectors} from "../../../redux/slices/userSlice"
import {Persons} from "../../../types/interfaces"

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

const mockTeachers = [
    {
        id: 2,
        name: "Николай Свиридов"
    },
    {
        id: 3,
        name: "Давид Ибрагимов"
    },
    {
        id: 4,
        avatar: require("../../../mockImages/avatars/9.png"),
        name: "Зинаида Дурова"
    }
] as Array<Persons>