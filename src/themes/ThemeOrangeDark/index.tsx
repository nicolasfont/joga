import { ElementType } from "react";
import { ThemeDark, ThemeDarkProps } from "../ThemeDark";

export type ThemeOrangeDarkProps<C extends ElementType> = ThemeDarkProps<C>;

export const ThemeOrangeDark = <C extends ElementType>({
  accentColor = "#f7931a",
  fontAccentColor = "#fff",
  ...props
}: ThemeOrangeDarkProps<C>) => (
  <ThemeDark
    accentColor={accentColor}
    fontAccentColor={fontAccentColor}
    {...props}
  />
);
