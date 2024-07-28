import { createSlice } from "@reduxjs/toolkit"
import { LOGIN } from "../utils/windowsSwitch"


export const currentWindowSlice = createSlice({
  name: "currentWindow",
  initialState: {
    currentWindow: LOGIN,
  },
  reducers: {
    changeCurrentWindow: (state, action) => {
      state.currentWindow = action.payload
    }
  }
})

export const { changeCurrentWindow } = currentWindowSlice.actions;
export default currentWindowSlice.reducer