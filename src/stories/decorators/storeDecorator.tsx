import { Provider, useDispatch } from 'react-redux';
import { generateBoard } from '../../utils/boardUtil';
import { setBoardData, setBoardSize } from '../../store/slices/boardSlice';
import { store } from '../../store/store';

import { Board } from '../../components/board/board';
import React from 'react';

const dispatch = useDispatch();

export const withMockedStoreDecorator = (component: React.FC) => {
  dispatch(setBoardSize({ cols: 30, raws: 30 }));
  dispatch(setBoardData(generateBoard(30, 30, false)));

  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
};
