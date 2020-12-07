import {combineReducers} from "redux"
import {userSlice} from '../slices/userSlice'

export const rootReducer = combineReducers({
    user: userSlice.reducer
})