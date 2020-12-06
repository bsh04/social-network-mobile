import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, UserValues} from '../../types/interfaces'

interface SliceState {
    status: APIStatus
    data: UserValues
}

const initialState = {
    status: APIStatus.Initial,
    data: {
        password: '',
        login: '',
        token: undefined
    }
} as SliceState

export const userSlice = createSlice({
    name: 'userSlice',
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
            state.data.token = '12345'
            state.status = APIStatus.Success
        }
    }
})

interface Store {
    user: SliceState
}

export const userSelectors = {
    getStatus: () => (state: Store) => state.user.status,
    getUser: () => (state: Store) => state.user.data
}