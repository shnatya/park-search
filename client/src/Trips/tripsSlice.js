import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { current } from '@reduxjs/toolkit'

export const fetchTrips = createAsyncThunk("trips/fetchTrips", () => {
    return fetch("users/trips")
      .then((res) => res.json())
      .then((data) => data);
  });

export const tripsSlice = createSlice({
    name: "trips",
    initialState: {
        trips: [],
    },
    reducers: {
        tripAdded(state, action) {
            state.trips.push(action.payload)
        },
        tripRemoved(state, action) {
            const index = state.trips.findIndex(trip => trip.id === action.payload)
            state.trips.splice(index, 1)
        },
        tripUpdated(state, action) {
            const index = state.trips.findIndex(trip => trip.id === action.payload.id)
            state.trips.splice(index, 1, action.payload)
        }
    },
    extraReducers: {
        // handle async actions
        [fetchTrips.fulfilled](state, action) {
          state.trips = action.payload;
        },
      },
})

export const { tripAdded, tripRemoved, tripUpdated } = tripsSlice.actions
export default tripsSlice.reducer