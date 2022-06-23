import { ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { PrimaryButton, Stack, Text, ThemeDark, ThemeLight } from "../..";

export default {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Default = () => <PrimaryButton>Click Me</PrimaryButton>;

export const WithPaddings = () => (
  <Stack gap="m" align="start">
    <PrimaryButton padding="xs">Extra Small Padding</PrimaryButton>
    <PrimaryButton padding="s">Small Padding</PrimaryButton>
    <PrimaryButton padding="m">Medium Padding</PrimaryButton>
    <PrimaryButton padding="l">Large Padding</PrimaryButton>
    <PrimaryButton padding="xl">Extra Large Padding</PrimaryButton>
  </Stack>
);

export const WithGap = () => (
  <PrimaryButton gap="m">
    <Text backgroundColor="red" padding="m">
      Red
    </Text>
    <Text backgroundColor="green" padding="m">
      Green
    </Text>
    <Text backgroundColor="blue" padding="m">
      Blue
    </Text>
  </PrimaryButton>
);

export const WithDarkTheme = () => (
  <ThemeDark padding="l">
    <PrimaryButton>Click Me</PrimaryButton>
  </ThemeDark>
);

export const TogglingThemes = () => {
  const [theme, setTheme] = useState("light");

  const Theme = theme === "light" ? ThemeLight : ThemeDark;

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <Theme padding="l">
      <PrimaryButton onClick={toggleTheme}>Toggle</PrimaryButton>
    </Theme>
  );
};
