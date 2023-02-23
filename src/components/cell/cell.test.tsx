import { Cell, CELL_TEST } from './cell';
import { render } from '@testing-library/react';
import { screen, userEvent } from '@storybook/testing-library';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Test styles', () => {
  it('Testing alive cell to have class', () => {
    jest
      .spyOn(reduxHooks, 'useSelector')
      .mockReturnValue({ boardData: [[{ isAlive: true, number: 1 }]] });
    render(<Cell number={1} />);
    const div = screen.getByTestId(CELL_TEST.testId);
    expect(div).toHaveClass('alive');
  });
});


//
// describe('Test handler', () => {
//   it('Testing cell to show its number', () => {
//     jest
//       .spyOn(reduxHooks, 'useSelector')
//       .mockReturnValue({ boardData: [[{ isAlive: true, number: 1 }]] });
//     const dispatch = jest.fn();
//     jest.spyOn(reduxHooks, 'useDispatch').mockResolvedValue(dispatch));
//     render(<Cell number={1} />);
//     const div = screen.getByTestId(CELL_TEST.testId);
//     fireEvent.click(div);
//     // jest.spyOn(reduxHooks, 'useDispatch').mockResolvedValue(dispatch);
//     userEvent.click(div);
//     expect(screen.findByText('1')).not.toBeInTheDocument;
//     expect(screen.getByText('0')).toBeInTheDocument;
//   });
// });
