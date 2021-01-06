import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, Persons} from "../../types/interfaces";

interface SliceState {
    status: APIStatus
    teachers: Array<Persons>
}

const initialState = {
    status: APIStatus.Initial,
    teachers: []
} as SliceState

export const teachersSlice = createSlice({
    name: "teachersSlice",
    initialState,
    reducers: {
        startFetch (state: SliceState) {
            state.status = APIStatus.Loading
        },
        successFetch (state: SliceState, action: PayloadAction<Array<Persons>>) {
            state.teachers = action.payload
            state.status = APIStatus.Success
        },
        failFetch (state: SliceState) {
            state.status = APIStatus.Failure
        }
    }
})

interface Store {
    teachers: SliceState
}

export const teachersSelectors = {
    getTeachers: () => (state: Store) => state.teachers.teachers,
    getStatus: () => (state: Store) => state.teachers.status
}