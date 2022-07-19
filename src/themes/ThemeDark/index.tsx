import { ElementType } from "react";
import { Theme, ThemeProps } from "../Theme";

export type ThemeDarkProps<C extends ElementType> = ThemeProps<C>;

export const ThemeDark = <C extends ElementType>({
  accentColor = "#fff",
  backgroundColor = "#333",
  fontColor = "#fff",
  ...props
}: ThemeDarkProps<C>) => (
  <Theme backgroundColor={backgroundColor} fontColor={fontColor} {...props} />
);
