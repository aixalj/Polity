import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Polity Design System',
          [
            'Docs',
            'Foundations',
            'Components',
            'Modals',
            'Tables',
            'Patterns',
            'Navigation',
            '*'
          ],
          'Foundations',
          [
            'Colors',
            'Typography',
            '*'
          ],
          'Components',
          '*'
        ],
      },
    },
  },
};

export default preview;
