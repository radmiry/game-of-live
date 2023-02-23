import React from 'react';
import { Main } from './containers/main';
import './styles/App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthForm } from './components/auth/authForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path={'auth'} element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
