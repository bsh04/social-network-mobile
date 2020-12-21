import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, UserValues} from '../../types/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SliceState {
    status: APIStatus
    data: UserValues
}

const initialState = {
    status: APIStatus.Initial,
    data: {
        email: "",
        password: "",
        token: undefined,
        displayName: undefined,
        phoneNumber: undefined,
        photoURL: undefined,
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
            state.status = APIStatus.Success
        },
        setToken(state: SliceState, action: PayloadAction<string | undefined>) {
            console.log(action)
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
    user: SliceState
}

export const userSelectors = {
    getStatus: () => (state: Store) => state.user.status,
    getUser: () => (state: Store) => state.user.data
}