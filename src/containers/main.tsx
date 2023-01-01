import { Board } from '../components/board/board';
import { useState } from 'react';

import { DEFAULT_NUM_COLS, DEFAULT_NUM_RAWS } from '../consts/boardConsts';

export const Main = () => {
  const [boardSize, setBoardSize] = useState({
    numCols: DEFAULT_NUM_COLS,
    numRows: DEFAULT_NUM_RAWS
  });

  const handleSet20 = () => {
    setBoardSize({ numCols: 20, numRows: 20 });
  };
  const handleSet40 = () => {
    setBoardSize({ numCols: 40, numRows: 40 });
  };

  return (
    <>
      <button onClick={() => handleSet20()}>20x20</button>
      <button onClick={handleSet40}>40x40</button>
      <Board
        numCols={boardSize.numCols}
        numRows={boardSize?.numRows}
        random={true}
      />
    </>
  );
};
