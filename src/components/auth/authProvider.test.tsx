import * as reduxHooks from 'react-redux';
import { render, screen } from '@testing-library/react';
import { AuthProvider } from './authProvider';
import { useNavigate } from 'react-router-dom';

jest.mock('react-redux');

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigate
}));

describe('Auth provider', () => {
  it('Redirect with username works', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({ name: 123 });
    render(
      <>
        <AuthProvider>
          <div>test</div>
        </AuthProvider>
      </>
    );
    const div = screen.getByText('test');
    expect(div).toBeInTheDocument();
  });
  it('Redirect to auth works', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({ name: undefined });
    render(
      <>
        <AuthProvider>
          <div>test</div>
        </AuthProvider>
      </>
    );
    expect(useNavigate()).toHaveBeenCalledTimes(1);
    expect(useNavigate()).toHaveBeenCalledWith('auth', { replace: true });
  });
});
