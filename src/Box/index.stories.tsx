import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";
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

export const ButtonStack = () => (
  <Box direction="column" gap={8}>
    <Button>One</Button>
    <Button>Two</Button>
  </Box>
);
