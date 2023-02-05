import { useCallback, useState } from 'react';
import './cell.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CellData, setBoardData } from '../../store/slices/boardSlice';

export enum CELL_TEST {
  testId = 'cell-test'
}

export interface IProps {
  number: number;
}

export const Cell = (props: IProps) => {
  const { boardData } = useSelector((state: RootState) => {
    return {
      boardData: state.board.boardData
    };
  });

  const dispatch = useDispatch();

  const getCellParams = useCallback(
    (number: number): CellData | undefined => {
      let cell;
      for (let i = 0; i < boardData.length && cell === undefined; i++) {
        cell = boardData[i].find((item) => item.number === number);
      }
      return cell;
    },
    [boardData]
  );

  const changeCellAliveStatus = useCallback((): Array<Array<CellData>> => {
    let boardCopy = [];
    for (let i = 0; i < boardData.length; i++) {
      boardCopy.push(
        Array.from(Array(boardData[i].length), (v, k) => {
          return {
            isAlive:
              boardData[i][k].number === props.number
                ? !boardData[i][k].isAlive
                : boardData[i][k].isAlive,
            number: boardData[i][k].number
          };
        })
      );
    }
    return boardCopy;
  }, [boardData, props.number]);

  const getClassName = () => {
    const classname = ['cell'];
    if (getCellParams(props.number)?.isAlive) classname.push('alive');
    return classname.join(' ');
  };
  const [cellValueVisible, setCellValueVisible] = useState(false);

  const handleClick = useCallback(() => {
    console.log(getCellParams(props.number));
    dispatch(setBoardData(changeCellAliveStatus()));
  }, [props.number, boardData]);

  return (
    <div
      onClick={handleClick}
      className={getClassName()}
      data-testid={'cell-test'}
    >
      {cellValueVisible ? props.number : undefined}
    </div>
  );
};
