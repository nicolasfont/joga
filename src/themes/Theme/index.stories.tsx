import { ComponentMeta } from "@storybook/react";
import { useCallback, useState } from "react";
import { SolidButton, Theme, ThemeDark, Theme as ThemeLight } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/Theme",
  component: Theme,
} as ComponentMeta<typeof Theme>;

export const Default = () => (
  <Theme>
    <ExampleForm />
  </Theme>
);

export const TogglingThemes = () => {
  const [theme, setTheme] = useState("light");

  const Theme = theme === "light" ? ThemeLight : ThemeDark;

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <Theme padding="l">
      <SolidButton onClick={toggleTheme}>Toggle</SolidButton>
    </Theme>
  );
};
