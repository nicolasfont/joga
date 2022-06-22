import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../ThemeBase";

export type ThemeLightProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeLight = <C extends ElementType>({
  foregroundColor = "#fff",
  primaryColor = "#333",
  ...props
}: ThemeLightProps<C>) => (
  <ThemeBase
    primaryColor={primaryColor}
    foregroundColor={foregroundColor}
    {...props}
  />
);
