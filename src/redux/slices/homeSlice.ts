import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, News} from "../../types/interfaces";
import {ContentType, ContentTypesI, ContentTypeView, FiltersI, RoleType, RoleTypeView} from "../../types/types";

interface SliceState {
    fetchStatus: APIStatus
    contentTypes: Array<ContentTypesI>
    filters: FiltersI
    content: Array<News>
    offset: number
}

const initFilters = {
    people: [2, 15],
    rolesType: [...Object.values(RoleType)].map(role => ({
        selected: false,
        title: RoleTypeView[role],
        type: role
    }))
} as FiltersI

const initContentTypes = [{
        checked: true,
        title: ContentTypeView[ContentType.News],
        type: ContentType.News
    },
    {
        checked: false,
        title: ContentTypeView[ContentType.Mention],
        type: ContentType.Mention
    }] as Array<ContentTypesI>

const initialState = {
    fetchStatus: APIStatus.Initial,
    contentTypes: initContentTypes,
    filters: initFilters,
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
        setContentType(state: SliceState, action: PayloadAction<Array<ContentTypesI>>) {
          state.contentTypes = action.payload
        },
        setFilters(state: SliceState, action: PayloadAction<FiltersI>) {
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
    getContentTypes: () => (state: Store) => state.home.contentTypes,
    getStatus: () => (state: Store) => state.home.fetchStatus,
    getFilters: () => (state: Store) => state.home.filters,
    getOffset: () => (state: Store) => state.home.offset,
}