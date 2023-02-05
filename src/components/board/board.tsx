import { useEffect, useState } from 'react';
import { DEFAULT_NUM_RAWS, DEFAULT_NUM_COLS } from '../../consts/boardConsts';
import { Cell } from '../cell/cell';

export interface IBoardProps {
  numCols: number;
  numRows: number;
  random?: boolean;
}

export const Board = (props: IBoardProps) => {
  const numCols = props.numCols ?? DEFAULT_NUM_COLS;
  const numRows = props.numRows ?? DEFAULT_NUM_RAWS;

  useEffect(() => {
    const rows = [];
    if (props.random) {
      for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => Math.random() > 0.7));
      }
    } else {
      for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => i % 2 === 0));
      }
    }
    setGrid(rows);
  }, [numCols, numRows, props.random]);

  const defaultGrid = [[false]];
  const [grid, setGrid] = useState(defaultGrid);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`,
        width: 'fit-content',
        margin: '0 auto',
        background: '#042940'
      }}
    >
      {grid.map((rows, i) =>
        rows.map((colum, j) => <Cell key={`${i} ${j}`} isAlive={grid[i][j]} />)
      )}
    </div>
  );
};
