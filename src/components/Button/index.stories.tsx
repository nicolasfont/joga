import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { ThemeDark, ThemeLight } from "../../themes";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Click Me</Button>;

export const WithLightTheme = () =>
  <ThemeLight>
    <Button>Click Me</Button>
  </ThemeLight>;

export const WithDarkTheme = () =>
  <ThemeDark>
    <Button>Click Me</Button>
  </ThemeDark>;

export const SwitchingThemes = () => {
  const [theme, setTheme] = useState("light");

  const Theme = theme === "light" ? ThemeLight : ThemeDark;

  return (
    <Theme>
      <Button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>Click Me</Button>
    </Theme>
  );
};

export const WithCustomColors = () =>
  <Button color="yellow" backgroundColor="red">
    Fancy
  </Button>;
