import { ComponentMeta } from "@storybook/react";
import { Box, Text } from "../..";

export default {
  title: "Containers/Box",
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
