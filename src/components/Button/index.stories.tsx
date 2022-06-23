import { ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { ThemeDark, ThemeLight } from "../../themes";
import { Stack } from "../Stack";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Click Me</Button>;

export const WithLightTheme = () => (
  <ThemeLight>
    <Button>Click Me</Button>
  </ThemeLight>
);

export const WithDarkTheme = () => (
  <ThemeDark>
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
    <Theme>
      <Button onClick={toggleTheme}>Toggle</Button>
    </Theme>
  );
};

export const WithCustomColors = () => (
  <Button color="yellow" backgroundColor="red">
    Fancy
  </Button>
);

export const WithGap = () => (
  <Button gap={8}>
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

export const WithPaddings = () => (
  <Stack gap={8} align="start">
    <Button padding="xs">Extra Small Padding</Button>
    <Button padding="s">Small Padding</Button>
    <Button padding="m">Medium Padding</Button>
    <Button padding="l">Large Padding</Button>
    <Button padding="xl">Extra Large Padding</Button>
  </Stack>
);