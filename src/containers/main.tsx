import { Board } from '../components/board/board';
import { setBoardSize } from '../store/slices/boardSlice';
import { setRunning } from '../store/slices/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Main = () => {
  const dispatch = useDispatch();

  const { running } = useSelector((state: RootState) => {
    return { running: state.game.running };
  });

  const handleSet20 = () => {
    //dispatch(setBoardData(generateBoard(20, 20, true)));
    dispatch(setBoardSize({ cols: 20, raws: 20 }));
  };
  const handleSet40 = () => {
    //dispatch(setBoardData(generateBoard(40, 40, true)));
    dispatch(setBoardSize({ cols: 40, raws: 40 }));
  };
  const handleClickRunning = () => {
    dispatch(setRunning());
  };

  return (
    <>
      <button onClick={() => handleSet20()}>20x20</button>
      <button onClick={handleSet40}>40x40</button>
      <button onClick={handleClickRunning}>{running ? 'Stop' : 'Start'}</button>
      <Board />
    </>
  );
};
