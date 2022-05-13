import { ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const Default = () => <Box>Box</Box>;

export const ButtonStack = () => (
  <Box direction="column" gap={8}>
    <Button>One</Button>
    <Button>Two</Button>
  </Box>
);
