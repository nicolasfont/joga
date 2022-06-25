import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../..";

export type ThemeLightProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeLight = <C extends ElementType>({
  defaultColors = ["#fff", "#333", "#999"],
  primaryColors = ["#333", "#fff", "#999"],
  ...props
}: ThemeLightProps<C>) => (
  <ThemeBase
    defaultColors={defaultColors}
    primaryColors={primaryColors}
    {...props}
  />
);
