import { createSlice } from "@reduxjs/toolkit"
import { loginFetch, registerFetch } from "../actions/accountAction"
import type { User } from "../../utils/interfaces"


const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: {} as User,
    status: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerFetch.pending, (state) => {
        state.status = "Pending..."
      })
      .addCase(registerFetch.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = ""
      })
      .addCase(registerFetch.rejected, (state, action) => {
        state.status = "Error!" + action.error.message
      })
      .addCase(loginFetch.pending, (state) => {
        state.status = "Pending..."
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.status = ""
        state.data = action.payload

      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.status = "Error!" + action.error.message
      })

  }
})

export default UserSlice