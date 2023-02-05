import React, { useEffect } from 'react';
import { DEFAULT_NUM_RAWS, DEFAULT_NUM_COLS } from '../../consts/boardConsts';
import { Cell } from '../cell/cell';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setBoardData } from '../../store/slices/boardSlice';
import { generateNextGeneration } from '../../utils/boardUtil';

interface IBoardProps {
  numCols?: number;
  numRows?: number;
}

export const Board: React.FC = (props: IBoardProps) => {
  const { running, boardSize, boardData } = useSelector((state: RootState) => {
    return {
      running: state.game.running,
      boardSize: state.board.boardSize,
      boardData: state.board.boardData
    };
  });

  const dispatch = useDispatch();
  const numCols = props.numCols ?? boardSize?.cols ?? DEFAULT_NUM_COLS;
  const numRows = props.numRows ?? boardSize?.raws ?? DEFAULT_NUM_RAWS;

  useEffect(() => {
    setTimeout(() => {
      if (!running) return;
      dispatch(
        setBoardData(generateNextGeneration(boardData, numCols, numRows))
      );
    }, 1000);
  }, [boardData, running]);

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
      {boardData.map((rows, i) =>
        boardData.map((colum, j) => (
          <Cell key={`${i} ${j}`} number={boardData[i][j].number} />
        ))
      )}
    </div>
  );
};
