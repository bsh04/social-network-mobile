import {combineReducers} from "redux"
import {userSlice} from '../slices/userSlice'
import {friendsSlice} from '../slices/friendsSlice'

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    friends: friendsSlice.reducer
})