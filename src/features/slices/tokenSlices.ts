import { createSlice } from "@reduxjs/toolkit"

const tokenSlices = createSlice(
  {
    name: "token",
    initialState: {
      name:"",
    },
    reducers: {
      putToken: (state, action) => {
        state.name= action.payload
      },
      deleteToken: (state) => {
        state.name="";
      }
    }
  })

export default tokenSlices
export const { putToken, deleteToken } = tokenSlices.actions