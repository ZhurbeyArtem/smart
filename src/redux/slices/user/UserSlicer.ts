import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/user';
import { getUsers } from './UserActions';

interface UserState {
  users: IUser[];
  searchText: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserState = {
  users: [],
  searchText: '',
  isLoading: false,
  isError: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.isLoading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload.map((item: IUser) => {
        return { ...item, key: item.id }
      })
    })
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false
      state.isError = true
      state.users = []
    })
  }
});

export const { setSearchText } = userSlice.actions;

export default userSlice.reducer;