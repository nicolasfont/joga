import { ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Button } from "../Button";
import { ThemeDark, ThemeLight } from "../../themes";
import { Text } from "../Text";

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
    <Text backgroundColor="red" padding={8}>
      Red
    </Text>
    <Text backgroundColor="green" padding={8}>
      Green
    </Text>
    <Text backgroundColor="blue" padding={8}>
      Blue
    </Text>
  </Button>
);
