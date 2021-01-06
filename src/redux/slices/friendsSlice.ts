import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {APIStatus, Friends} from "../../types/interfaces";

interface SliceState {
    status: APIStatus
    friends: Array<Friends>
}

const initialState = {
    status: APIStatus.Initial,
    friends: []
} as SliceState

export const friendsSlice = createSlice({
    name: "friendsSlice",
    initialState,
    reducers: {
        startFetch (state: SliceState) {
            state.status = APIStatus.Loading
        },
        successFetch (state: SliceState, action: PayloadAction<Array<Friends>>) {
            state.friends = action.payload
            state.status = APIStatus.Success
        },
        failFetch (state: SliceState) {
            state.status = APIStatus.Failure
        }
    }
})

interface Store {
    friends: SliceState
}

export const friendsSelectors = {
    getFriends: () => (state: Store) => state.friends.friends,
    getStatus: () => (state: Store) => state.friends.status
}