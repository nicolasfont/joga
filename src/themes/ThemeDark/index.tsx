import { ElementType } from "react";
import { Theme, ThemeProps } from "../Theme";

export type ThemeDarkProps<C extends ElementType> = ThemeProps<C>;

export const ThemeDark = <C extends ElementType>({
  accentColor = "#fff",
  backgroundColor = "#333",
  borderColor = "#fff",
  fontColor = "#fff",
  fontAccentColor = "#333",
  ...props
}: ThemeDarkProps<C>) => (
  <Theme
    accentColor={accentColor}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    fontColor={fontColor}
    fontAccentColor={fontAccentColor}
    {...props}
  />
);
