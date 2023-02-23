import { useDispatch } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { setUser } from '../../store/slices/appSlice';
import { useNavigate } from 'react-router-dom';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernameForAuth, setUsernameForAuth] = useState<string | undefined>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameForAuth(event.target.value);
  };

  const handleClick = () => {
    dispatch(setUser({ name: usernameForAuth }));
    navigate('/');
  };

  return (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Авторизоваться</button>
    </>
  );
};
