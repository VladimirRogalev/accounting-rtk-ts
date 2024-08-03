import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants"
import type { UserRequest } from "../../utils/interfaces"

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
      if (!response.ok) {
        throw new Error(response.status + ", status")
      }
      const data = await response.json()
      return data
    } catch (e) {
      console.log(e)
      throw e
    }


  })
export const loginFetch = createAsyncThunk(
  "account/loginFetch",
  async (token: string, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Authorization": token
      }
    })
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
    return await response.json()
  }
)