import { RootProvider } from "../src/providers/RootProvider";
import type { Preview } from "@storybook/react";
import React from "react";

import "../src/app/globals.scss";
import "@mantine/core/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <RootProvider>
        <Story />
      </RootProvider>
    ),
  ],
};

export default preview;
