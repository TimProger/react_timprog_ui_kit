import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: 'Large',
  size: 'large',
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: 'Medium',
  size: 'medium',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Small',
  size: 'small',
};
