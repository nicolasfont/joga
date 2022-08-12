import { ElementType } from "react";
import { Theme, ThemeProps } from "../Theme";

export type ThemeOrangeProps<C extends ElementType> = ThemeProps<C>;

export const ThemeOrange = <C extends ElementType>({
  accentColor = "#f7931a",
  fontAccentColor = "#fff",
  ...props
}: ThemeOrangeProps<C>) => (
  <Theme
    accentColor={accentColor}
    fontAccentColor={fontAccentColor}
    {...props}
  />
);
