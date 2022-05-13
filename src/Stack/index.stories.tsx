import { ComponentMeta } from "@storybook/react";
import { Stack } from "../Stack";
import { Button } from "../Button";

export default {
  title: "Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const Default = () => (
  <Stack gap={8}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
);

export const Centered = () => (
  <Stack gap={8} align="center">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
);
