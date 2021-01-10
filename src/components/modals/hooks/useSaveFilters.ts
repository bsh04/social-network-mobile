import {useCallback} from "react";
import {ContentTypesI, FiltersI} from "../../../types/types";
import {useDispatch} from "react-redux";
import {homeSlice} from "../../../redux/slices/homeSlice"

export const useSaveFilters = () => {
    const dispatch = useDispatch()
    const {startFetch, setFilters, setContentType} = homeSlice.actions

    const save = useCallback((contentType: Array<ContentTypesI>, filters: FiltersI) => {
        dispatch(startFetch())
        dispatch(setContentType(contentType))
        dispatch(setFilters(filters))
    }, [dispatch])

    return {save}
}