import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../..";

export type ThemeDarkProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeDark = <C extends ElementType>({
  defaultColors = ["#333", "#fff", "#999"],
  primaryColors = ["#fff", "#333", "#999"],
  ...props
}: ThemeDarkProps<C>) => (
  <ThemeBase
    defaultColors={defaultColors}
    primaryColors={primaryColors}
    {...props}
  />
);
