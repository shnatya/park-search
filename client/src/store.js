import { configureStore } from "@reduxjs/toolkit"
import tripsReducer from "./Trips/tripsSlice"

const store = configureStore({
    reducer: {
        trips: tripsReducer,
    },
})

export default store