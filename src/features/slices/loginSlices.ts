import { createSlice } from "@reduxjs/toolkit"
import type { Login } from "../../utils/interfaces"
import { loginFetch } from "../actions/accountAction"


const LoginSlices = createSlice({
  name: 'login',
  initialState: {
    login: {} as Login,
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