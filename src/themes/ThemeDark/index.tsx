import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../ThemeBase";

export type ThemeDarkProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeDark = <C extends ElementType>({
  foregroundColor = "#333",
  primaryColor = "#fff",
  ...props
}: ThemeDarkProps<C>) => (
  <ThemeBase
    primaryColor={primaryColor}
    foregroundColor={foregroundColor}
    {...props}
  />
);
