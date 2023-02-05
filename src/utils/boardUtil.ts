import { CellData } from '../store/slices/boardSlice';
import { RELATIVE_POSITIONS } from '../consts/boardConsts';

export type generateBoardFunction = (
  numCols: number,
  numRows: number,
  random?: boolean
) => Array<Array<CellData>>;

export const generateBoard: generateBoardFunction = (
  numCols,
  numRows,
  random
) => {
  const rows = [];
  if (random) {
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), (v, k) => {
          return {
            isAlive: Math.random() > 0.7,
            number: i * numCols + k
          };
        })
      );
    }
  } else {
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), (v, k) => {
          return {
            isAlive: i % 2 === 0,
            number: i * numCols + k
          };
        })
      );
    }
  }
  return rows;
};

export type newGenerationFunction = (
  board: Array<Array<CellData>>,
  numCols: number,
  numRaws: number
) => Array<Array<CellData>>;

export const generateNextGeneration: newGenerationFunction = (
  board,
  numCols,
  numRows
) => {
  let boardCopy = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let neighbors = 0;

      RELATIVE_POSITIONS.forEach(([x, y]) => {
        const newI = i + x;
        const newJ = j + y;

        if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
          neighbors += boardCopy[newI][newJ].isAlive ? 1 : 0;
        }
      });

      if (neighbors < 2 || neighbors > 3) {
        boardCopy[i][j].isAlive = false;
      } else if (!boardCopy[i][j] && neighbors === 3) {
        boardCopy[i][j].isAlive = true;
      }
    }
  }
  return boardCopy;
};
