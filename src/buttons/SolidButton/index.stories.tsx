import { ComponentMeta } from "@storybook/react";
import { SolidButton, Stack } from "../..";

export default {
  title: "Buttons/SolidButton",
  component: SolidButton,
} as ComponentMeta<typeof SolidButton>;

export const Default = () => <SolidButton>Click Me</SolidButton>;

export const WithCustomColors = () => (
  <SolidButton color="yellow" backgroundColor="red">
    Fancy
  </SolidButton>
);

export const WithPaddings = () => (
  <Stack gap="m" align="start">
    <SolidButton padding="xs">Extra Small Padding</SolidButton>
    <SolidButton padding="s">Small Padding</SolidButton>
    <SolidButton padding="m">Medium Padding</SolidButton>
    <SolidButton padding="l">Large Padding</SolidButton>
    <SolidButton padding="xl">Extra Large Padding</SolidButton>
  </Stack>
);
