import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: 'Large',
  size: 'large',
  style: 'inner',
  color: 'white',
  background: 'rgb(100, 101, 160)',
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: 'Medium',
  size: 'medium',
  style: 'inner',
  color: 'white',
  background: 'rgb(100, 101, 160)',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Small',
  size: 'small',
  style: 'inner',
  color: 'white',
  background: 'rgb(100, 101, 160)',
};
