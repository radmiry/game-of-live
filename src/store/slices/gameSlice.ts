import { createSlice } from '@reduxjs/toolkit';

export interface gameState {
  running: boolean;
}

export const initialState: gameState = {
  running: false
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setRunning: (state) => {
      state.running = !state.running;
    }
  }
});

export const { setRunning } = gameSlice.actions;
export default gameSlice.reducer;
