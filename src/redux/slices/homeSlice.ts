import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {APIStatus, News} from "../../types/interfaces";
import {ContentType, FiltersType} from "../../types/types";

interface SliceState {
    fetchStatus: APIStatus
    contentType: ContentType
    filters: Array<FiltersType> | Array<number>
    content: Array<News>
    offset: number
}

const initialState = {
    fetchStatus: APIStatus.Initial,
    contentType: ContentType.News,
    filters: [],
    content: [],
    offset: 0
} as SliceState

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        startFetch(state: SliceState) {
            state.fetchStatus = APIStatus.Loading
        },
        successFetch(state: SliceState, action: PayloadAction<Array<News>>) {
            state.content = action.payload
            state.fetchStatus = APIStatus.Success
        },
        failFetch(state: SliceState) {
            state.fetchStatus = APIStatus.Failure
        },
        setContentType(state: SliceState, action: PayloadAction<ContentType>) {
          state.contentType = action.payload
        },
        setFilters(state: SliceState, action: PayloadAction<Array<FiltersType> | Array<number>>) {
            state.filters = action.payload
        },
        setOffset(state: SliceState, action: PayloadAction<number>) {
            state.offset = action.payload
        },
        resetData(state: SliceState) {
            state.content = []
        }
    }
})

interface Store {
    home: SliceState
}

export const homeSelectors = {
    getContent: () => (state: Store) => state.home.content,
    getStatus: () => (state: Store) => state.home.fetchStatus,
}