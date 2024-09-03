import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getUsers = createAsyncThunk('users/getAll',
  async (_, thunkApi) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/`)
      const data = await response.json()
      return data
    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
  }
) 

export const selectFilteredUsers = createSelector(
  [(state: RootState) => state.users, (state: RootState) => state.users.searchText],
  (users, searchText) => {
    if (!searchText) return users.users;

    return users.users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.username.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);