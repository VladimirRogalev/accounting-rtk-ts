import { createSlice } from "@reduxjs/toolkit"

import { loginFetch } from "../actions/accountAction"
import  type { User } from "../../utils/interfaces"



const LoginSlices = createSlice({
  name: 'login',
  initialState: {
    login: {} as User,
    status:''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginFetch.pending, (state) => {
        state.status = 'Loading...'
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.login = action.payload;
        state.status  = ''
      })
      .addCase(loginFetch.rejected, (state) => {
        state.status = 'Error!'
      })
  }
})
export default LoginSlices