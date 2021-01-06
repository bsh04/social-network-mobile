import {combineReducers} from "redux"
import {userSlice} from '../slices/userSlice'
import {friendsSlice} from '../slices/friendsSlice'
import {classmatesSlice} from "../slices/classmatesSlice"
import {teachersSlice} from "../slices/teachersSlice"

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    friends: friendsSlice.reducer,
    classmates: classmatesSlice.reducer,
    teachers: teachersSlice.reducer,
})