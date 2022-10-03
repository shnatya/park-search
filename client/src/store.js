import { configuresStore } from "@reduxjs/toolkit"
import tripsReducer from "./Trips/tripsSlice"

const store = configuresStore({
    reducer: {
        trips: tripsReducer,
    },
})

export default store