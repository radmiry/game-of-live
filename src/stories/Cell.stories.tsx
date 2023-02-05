import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { store } from '../store/store';

import { Cell } from '../components/cell/cell';
import { Provider } from 'react-redux';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Cell',
  component: Cell,
  decorators: [
    (Cell) => (
      <Provider store={store}>
        <Cell />
      </Provider>
    )
  ]
} as ComponentMeta<typeof Cell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Alive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Alive.args = {
  number: 1
};

export const NotAlive = Template.bind({});
NotAlive.args = {
  number: 2
};
