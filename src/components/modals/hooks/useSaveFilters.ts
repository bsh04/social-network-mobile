import {useCallback} from "react";
import {ContentTypesI, FiltersI} from "../../../types/types";
import {useDispatch} from "react-redux";
import {homeSlice} from "../../../redux/slices/homeSlice"
import {useNavigation} from '@react-navigation/native'


export const useSaveFilters = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const {startFetch, setFilters, setContentType} = homeSlice.actions

    const save = useCallback((contentType: Array<ContentTypesI>, filters: FiltersI) => {
        dispatch(startFetch())
        dispatch(setContentType(contentType))
        dispatch(setFilters(filters))
        navigation.navigate("Home")
    }, [dispatch])

    return {save}
}