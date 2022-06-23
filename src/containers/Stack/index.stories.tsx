import { ComponentMeta } from "@storybook/react";
import { PrimaryButton, Text, Stack } from "../..";

export default {
  title: "Containers/Stack",
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
    <PrimaryButton>One</PrimaryButton>
    <PrimaryButton>Two</PrimaryButton>
    <PrimaryButton>Three</PrimaryButton>
  </Stack>
);

export const WithLargeGap = () => (
  <Stack gap="l">
    <PrimaryButton>One</PrimaryButton>
    <PrimaryButton>Two</PrimaryButton>
    <PrimaryButton>Three</PrimaryButton>
  </Stack>
);

export const Centered = () => (
  <Stack gap="m" align="center">
    <PrimaryButton>One</PrimaryButton>
    <PrimaryButton>Two</PrimaryButton>
    <PrimaryButton>Three</PrimaryButton>
  </Stack>
);
