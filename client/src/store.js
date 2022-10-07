import { configureStore } from "@reduxjs/toolkit"
import tripsReducer from "./Trips/tripsSlice"

export const store = configureStore({
    reducer: {
        trips: tripsReducer,
    },
})

