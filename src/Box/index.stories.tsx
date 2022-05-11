import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "../Box";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Box",
};
