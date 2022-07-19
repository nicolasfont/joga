import { ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Button, Stack, Text, Theme as ThemeLight, ThemeDark } from "../..";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Click Me</Button>;

export const WithCustomColors = () => (
  <Button color="yellow" backgroundColor="red">
    Fancy
  </Button>
);

export const WithPaddings = () => (
  <Stack gap="m" align="start">
    <Button padding="xs">Extra Small Padding</Button>
    <Button padding="s">Small Padding</Button>
    <Button padding="m">Medium Padding</Button>
    <Button padding="l">Large Padding</Button>
    <Button padding="xl">Extra Large Padding</Button>
  </Stack>
);

export const WithGap = () => (
  <Button gap="m">
    <Text backgroundColor="red" padding="m">
      Red
    </Text>
    <Text backgroundColor="green" padding="m">
      Green
    </Text>
    <Text backgroundColor="blue" padding="m">
      Blue
    </Text>
  </Button>
);

export const WithDarkTheme = () => (
  <ThemeDark padding="l">
    <Button>Click Me</Button>
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
      <Button onClick={toggleTheme}>Toggle</Button>
    </Theme>
  );
};