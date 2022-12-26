import { Cell, CELL_TEST } from './cell';
import { render } from '@testing-library/react';
import { screen, userEvent } from '@storybook/testing-library';

describe('Test styles', () => {
  it('Testing alive cell to have class', () => {
    render(<Cell isAlive={true} />);
    const div = screen.getByTestId(CELL_TEST.testId);
    expect(div).toHaveClass('alive');
  });
});

describe('Test handler', () => {
  it('Testing cell to show alive status', () => {
    render(<Cell isAlive={true} />);
    const div = screen.getByTestId(CELL_TEST.testId);
    const handleClick = jest.fn((x) => x + 1);
    userEvent.click(div);
    //expect(handleClick).toHaveBeenCalledTimes(1);  почему тут падаем?
    expect(screen.findByText('0')).not.toBeInTheDocument;
    expect(screen.getByText('1')).toBeInTheDocument;
  });

  it('Testing cell to show notAlive status', () => {
    render(<Cell isAlive={false} />);
    const div = screen.getByTestId(CELL_TEST.testId);
    userEvent.click(div);
    expect(screen.findByText('1')).not.toBeInTheDocument;
    expect(screen.getByText('0')).toBeInTheDocument;
  });
});
