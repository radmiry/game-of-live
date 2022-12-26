import { useCallback, useState } from 'react';
import './cell.style.css';

export enum CELL_TEST {
  testId = 'cell-test'
}

export interface IProps {
  isAlive: boolean;
}

export const Cell = (props: IProps) => {
  const getClassName = (isAlive: boolean) => {
    const classname = ['cell'];
    if (isAlive) classname.push('alive');
    return classname.join(' ');
  };
  const [cellValueVisible, setCellValueVisible] = useState(false);

  const handleClick = useCallback(() => {
    setCellValueVisible(true);
    setTimeout(() => {
      setCellValueVisible(false);
    }, 1000);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={getClassName(props.isAlive)}
      data-testid={'cell-test'}
    >
      {cellValueVisible ? (props.isAlive ? 1 : 0) : undefined}
    </div>
  );
};
