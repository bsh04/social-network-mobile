import {configureStore, createStore} from "@reduxjs/toolkit"
import {rootReducer} from './rootReducer'
import {composeWithDevTools} from "remote-redux-devtools"

export const store = configureStore({
    reducer: rootReducer,
});
