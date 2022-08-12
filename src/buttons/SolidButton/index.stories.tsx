import { ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { SolidButton, Stack, Text, Theme as ThemeLight, ThemeDark } from "../..";

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

export const WithGap = () => (
  <SolidButton gap="m">
    <Text backgroundColor="red" padding="m">
      Red
    </Text>
    <Text backgroundColor="green" padding="m">
      Green
    </Text>
    <Text backgroundColor="blue" padding="m">
      Blue
    </Text>
  </SolidButton>
);
