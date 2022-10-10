import { configureStore } from "@reduxjs/toolkit"
import tripsReducer from "./Trips/tripsSlice"
import userReducer from "./Log/usersSlice"

export const store = configureStore({
    reducer: {
        trips: tripsReducer,
        user: userReducer
    },
})

