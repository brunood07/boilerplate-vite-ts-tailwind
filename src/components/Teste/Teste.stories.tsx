import React from 'react';
import { Story } from '@storybook/react';
import { Teste } from '.';

const Template: Story = (args) => <Teste {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
};

export default {
  title: 'Teste',
  component: Teste
};