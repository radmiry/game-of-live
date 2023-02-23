import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const { name } = useSelector((state: RootState) => {
    return { name: state.app.user.name };
  });
  const navigate = useNavigate();

  if (name === undefined || name.length === 0)
    navigate('auth', { replace: true });
  return <>{children}</>;
};
