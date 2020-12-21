import {combineReducers} from "redux"
import {loginSlice} from '../slices/loginSlice'

export const rootReducer = combineReducers({
    login: loginSlice.reducer
})