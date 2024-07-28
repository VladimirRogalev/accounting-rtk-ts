import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants"
import type { UserRequest, UserResponse } from "../../utils/interfaces"

export const registerFetch = createAsyncThunk(
  "account/registerFetch",
  async (registerUser: UserRequest, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify(registerUser),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      return /*data.ok ? */data.body /*: new Error('Response not OK')*/
    } catch (e) {
      return console.log(e)
    }


  })

export const loginFetch = createAsyncThunk(
  "account/loginFetch",
  async (thunkAPI) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST"
    })
    const data = await response.json()
    return data
  }
)