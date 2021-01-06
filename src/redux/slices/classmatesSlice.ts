import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, Persons} from "../../types/interfaces";

interface SliceState {
    status: APIStatus
    classmates: Array<Persons>
}

const initialState = {
    status: APIStatus.Initial,
    classmates: []
} as SliceState

export const classmatesSlice = createSlice({
    name: "classmatesSlice",
    initialState,
    reducers: {
        startFetch (state: SliceState) {
            state.status = APIStatus.Loading
        },
        successFetch (state: SliceState, action: PayloadAction<Array<Persons>>) {
            state.classmates = action.payload
            state.status = APIStatus.Success
        },
        failFetch (state: SliceState) {
            state.status = APIStatus.Failure
        }
    }
})

interface Store {
    classmates: SliceState
}

export const classmatesSelectors = {
    getClassmates: () => (state: Store) => state.classmates.classmates,
    getStatus: () => (state: Store) => state.classmates.status
}