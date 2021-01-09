import {combineReducers} from "redux"
import {userSlice} from '../slices/userSlice'
import {friendsSlice} from '../slices/friendsSlice'
import {classmatesSlice} from "../slices/classmatesSlice"
import {teachersSlice} from "../slices/teachersSlice"
import {homeSlice} from "../slices/homeSlice"

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    friends: friendsSlice.reducer,
    classmates: classmatesSlice.reducer,
    teachers: teachersSlice.reducer,
    home: homeSlice.reducer
})