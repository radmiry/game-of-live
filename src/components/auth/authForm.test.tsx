import { setUser } from '../../store/slices/appSlice';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from './authForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as any),
  useDispatch: () => mockedDispatch
}));

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigate
}));

describe('Auth form', () => {
  it('Login works', async () => {
    render(<AuthForm />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123' } });
    expect(await screen.getByRole('textbox')).toHaveDisplayValue('123');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(useDispatch()).toHaveBeenCalledWith(setUser({ name: '123' }));
    expect(useNavigate()).toHaveBeenCalledTimes(1);
    expect(useNavigate()).toHaveBeenCalledWith('/');
  });
});
