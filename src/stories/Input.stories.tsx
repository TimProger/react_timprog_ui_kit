import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../index';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = () => {
  const [value, setValue] = React.useState('');
  return <Input
      type='text'
      placeholder='Text'
      onChange={(e)=>setValue(e.target.value)}
      value={value} />;
};

export const Password = () => {
  const [value, setValue] = React.useState('');
  return <Input
      type='password'
      placeholder='Password'
      onChange={(e)=>setValue(e.target.value)}
      value={value} />;
};

export const Email = () => {
  const [value, setValue] = React.useState('');
  return <Input
      type='email'
      placeholder='Email'
      onChange={(e)=>setValue(e.target.value)}
      value={value} />;
};

export const Tel = () => {
  const [value, setValue] = React.useState('');
  return <Input
      type='tel'
      placeholder='Tel'
      onChange={(e)=>setValue(e.target.value)}
      value={value} />;
};