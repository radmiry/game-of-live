import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface appState {
  user: IUser;
}

export interface IUser {
  name: string | undefined;
}

export const initialState: appState = {
  user: {
    name: undefined
  }
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = appSlice.actions;
export default appSlice.reducer;
