import { Board } from '../components/board/board';
import { setBoardData, setBoardSize } from '../store/slices/boardSlice';
import { setRunning } from '../store/slices/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { generateBoard } from '../utils/boardUtil';
import { AuthProvider } from '../components/auth/authProvider';
import { setUser } from '../store/slices/appSlice';

export const Main = () => {
  const dispatch = useDispatch();

  const { running, name } = useSelector((state: RootState) => {
    return { running: state.game.running, name: state.app.user.name };
  });

  const handleSet20 = () => {
    dispatch(setBoardData(generateBoard(20, 20, true)));
    dispatch(setBoardSize({ cols: 20, raws: 20 }));
  };
  const handleSet40 = () => {
    dispatch(setBoardData(generateBoard(40, 40, true)));
    dispatch(setBoardSize({ cols: 40, raws: 40 }));
  };
  const handleClickRunning = () => {
    dispatch(setRunning());
  };

  const handleLogout = () => {
    dispatch(setUser({ name: undefined }));
  };

  return (
    <AuthProvider>
      <div>
        <span>Привет, {name} </span>
        <button onClick={handleLogout}>Выйти</button>
      </div>
      <button onClick={() => handleSet20()}>20x20</button>
      <button onClick={handleSet40}>40x40</button>
      <button onClick={handleClickRunning}>{running ? 'Stop' : 'Start'}</button>
      <Board />
    </AuthProvider>
  );
};
