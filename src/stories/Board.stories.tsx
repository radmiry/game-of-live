import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { store } from '../store/store';
import { Board } from '../components/board/board';
import { Provider } from 'react-redux';
import { withMockedStoreDecorator } from './decorators/storeDecorator';

export default {
  title: 'Example/Board',
  component: Board,
  argTypes: {
    numCols: 30,
    numRows: 30
  }
} as unknown as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Small = Template.bind({});
Small.args = {
  numRows: 10,
  numCols: 10
};

export const Middle = Template.bind({});
Middle.args = {
  numRows: 20,
  numCols: 20
};

export const Default = Template.bind({});
Default.args = {};

export const Big = Template.bind({});
Big.args = {
  numRows: 40,
  numCols: 40
};
