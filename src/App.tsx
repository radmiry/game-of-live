import React from 'react';
import { Main } from './containers/main';
import './styles/App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
