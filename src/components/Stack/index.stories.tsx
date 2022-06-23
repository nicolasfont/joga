import { ComponentMeta } from "@storybook/react";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Text } from "../Text";

export default {
  title: "Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const Default = () => (
  <Stack>
    <Text>One</Text>
    <Text>Two</Text>
    <Text>Three</Text>
  </Stack>
);

export const WithGap = () => (
  <Stack gap="m">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
);

export const WithLargeGap = () => (
  <Stack gap="l">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
);

export const Centered = () => (
  <Stack gap="m" align="center">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
);
