import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cell } from '../components/cell/cell';
import { Simulate } from 'react-dom/test-utils';
import play = Simulate.play;
import { within } from '@storybook/testing-library';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Cell',
  component: Cell
} as ComponentMeta<typeof Cell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Alive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Alive.args = {
  isAlive: true
};

export const NotAlive = Template.bind({});
NotAlive.args = {
  isAlive: false
};
