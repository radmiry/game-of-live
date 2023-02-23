import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './slices/boardSlice';
import gameSlice from './slices/gameSlice';
import appSlice from './slices/appSlice';

export const store = configureStore({
  reducer: {
    board: boardSlice,
    game: gameSlice,
    app: appSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
