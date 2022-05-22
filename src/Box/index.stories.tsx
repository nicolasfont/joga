import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
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
