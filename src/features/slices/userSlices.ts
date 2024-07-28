import {createSlice} from "@reduxjs/toolkit";
import { loginFetch, registerFetch } from "../actions/accountAction"
import type {User} from "../../utils/interfaces";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user: {} as User,
        status: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerFetch.pending, (state) => {
                state.status = 'Pending...'
            })
            .addCase(registerFetch.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = '';
            })
            .addCase(registerFetch.rejected, (state) => {
                state.status = 'Error!'
            })
        builder
          .addCase(loginFetch.pending, (state) => {
              state.status = 'Loading...'
          })
          .addCase(loginFetch.fulfilled, (state, action) => {
              state.user = action.payload;
              state.status  = ''
          })
          .addCase(loginFetch.rejected, (state) => {
              state.status = 'Error!'
          })
    }
})

export default UserSlice