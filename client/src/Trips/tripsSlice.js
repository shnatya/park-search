import { createSlice } from "@reduxjs/toolkit"

const tripsSlice = createSlice({
    name: "trips",
    initialState: {
        entities: [],
    },
    reducers: {
        tripAdded(state, action) {
            state.entities.push({

            });
        },
        tripRemoved(state, action) {
            
        }
    }
})

export default { tripAdded, tripRemoved } = tripsSlice.actions