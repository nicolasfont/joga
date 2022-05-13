import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { createStory } from "../createStory";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const Default = createStory(Box);
Default.args = {
  children: [<div>One</div>, <div>Two</div>],
};

export const WithDirectionColumn = createStory(Box);
WithDirectionColumn.args = {
  children: [<div>One</div>, <div>Two</div>],
  direction: "column",
};
