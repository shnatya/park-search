import { createSlice } from "@reduxjs/toolkit"
import { current } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
    },
    reducers: {
        userLogin(state, action) {
            state.user = action.payload
        },
        userLogout(state) {
            state.user = {}
        }
    }
})

export const { userLogin, userLogout } = usersSlice.actions
export default usersSlice.reducer