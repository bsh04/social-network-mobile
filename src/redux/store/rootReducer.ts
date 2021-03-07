import {combineReducers} from "redux"
import {userSlice} from '../slices/userSlice'
import {friendsSlice} from '../slices/friendsSlice'
import {classmatesSlice} from "../slices/classmatesSlice"
import {teachersSlice} from "../slices/teachersSlice"
import {homeSlice} from "../slices/homeSlice"
import {reducer as formReducer} from "redux-form"

export const rootReducer = combineReducers({
    form: formReducer,
    user: userSlice.reducer,
    friends: friendsSlice.reducer,
    classmates: classmatesSlice.reducer,
    teachers: teachersSlice.reducer,
    home: homeSlice.reducer
})