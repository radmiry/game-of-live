import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './slices/boardSlice';
import gameSlice from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    board: boardSlice,
    game: gameSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
