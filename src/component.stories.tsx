import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StringCapitalize, StringCapitalizeProps } from './component';

export default {
  title: 'String Capitalize',
  component: StringCapitalize,
  parameters: {
    componentSubtitle:
      'Capitalizes the first character of a given string. Option to capitalize all words.',
  },
} as Meta;

export const FirstWord: Story<StringCapitalizeProps> = (args) => (
  <StringCapitalize {...args} str="lorem ipsum dolor sit amet" />
);

export const AllWords: Story<StringCapitalizeProps> = (args) => (
  <StringCapitalize {...args} str="lorem ipsum dolor sit amet" allWords />
);
