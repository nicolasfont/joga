import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../..";

export type ThemeDarkProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeDark = <C extends ElementType>({
  defaultColors = ["#333", "#fff", "#666"],
  primaryColors = ["#fff", "#333", "#666"],
  ...props
}: ThemeDarkProps<C>) => (
  <ThemeBase
    defaultColors={defaultColors}
    primaryColors={primaryColors}
    {...props}
  />
);
