import { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';
// import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

const parameters: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    paddings: {
      default: 'VeryLarge',
      values: [
        { name: 'VerySmall', value: '16px' },
        { name: 'Small', value: '32px' },
        { name: 'VeryMedium', value: '48px' },
        { name: 'Medium', value: '64px' },
        { name: 'Large', value: '80px' },
        { name: 'VeryLarge', value: '96px' },
      ],
    },
    themes: {
      // default: 'dark',
      list: [
        { class: Theme.LIGHT, color: '#ffffff', name: 'light' },
        { class: Theme.DARK, color: '#000000', name: 'dark' },
      ],
    },
  },
};

export const decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.DARK),
  RouterDecorator,
  // TranslationDecorator,
  SuspenseDecorator,
];

export default parameters;
