import { DEFAULT_NUM_COLS, DEFAULT_NUM_RAWS } from '../../consts/boardConsts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateBoard } from '../../utils/boardUtil';

export interface CellData {
  number: number;
  isAlive: boolean;
}

export interface BoardState {
  boardSize: BoardSize;
  boardData: Array<Array<CellData>>;
}

export interface BoardSize {
  raws: number;
  cols: number;
}

export const initialState: BoardState = {
  boardSize: {
    raws: DEFAULT_NUM_RAWS,
    cols: DEFAULT_NUM_COLS
  },
  boardData: generateBoard(DEFAULT_NUM_COLS, DEFAULT_NUM_RAWS, true)
};

const boardSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    setBoardSize: (state, action: PayloadAction<BoardSize>) => {
      state.boardSize.cols = action.payload.cols;
      state.boardSize.raws = action.payload.raws;
    },
    setBoardData: (state, action: PayloadAction<Array<Array<CellData>>>) => {
      state.boardData = action.payload;
    }
  }
});

export const { setBoardSize, setBoardData } = boardSlice.actions;
export default boardSlice.reducer;
