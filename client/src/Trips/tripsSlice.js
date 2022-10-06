import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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
            state.trips.push(action.payload);
        }
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchTrips.fulfilled](state, action) {
          state.trips = action.payload;
        },
      },
})

export const { tripAdded } = tripsSlice.actions
export default tripsSlice.reducer