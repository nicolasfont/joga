import { ComponentMeta } from "@storybook/react";
import { Box } from ".";
import { Text } from "../Text";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const Default = () => (
  <Box>
    <Text>Box</Text>
  </Box>
);

export const AsAnchor = () => (
  <Box as="a" href="https://jogajs.com">
    Click Me
  </Box>
);
