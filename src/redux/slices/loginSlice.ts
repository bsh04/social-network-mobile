import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, UserValues} from '../../types/interfaces'

interface SliceState {
    status: APIStatus
    data: UserValues
}

const initialState = {
    status: APIStatus.Initial,
    data: {
        email: "",
        token: undefined,
        displayName: undefined,
        phoneNumber: undefined,
        photoURL: undefined,
    }
} as SliceState

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        startAuth(state: SliceState) {
            state.status = APIStatus.Loading
        },
        failAuth(state: SliceState) {
            state.status = APIStatus.Failure
        },
        successAuth(state: SliceState, action: PayloadAction<UserValues>) {
            state.data = action.payload
            state.status = APIStatus.Success
        },
        setToken(state: SliceState, action: PayloadAction<string | undefined>) {
            state.data.token = action.payload
            state.status = APIStatus.Initial
        },
        reset(state: SliceState) {
            state.data.token = undefined
            state.status = APIStatus.Initial
        }
    }
})

interface Store {
    login: SliceState
}

export const loginSelectors = {
    getStatus: () => (state: Store) => state.login.status,
    getUser: () => (state: Store) => state.login.data
}