import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../..";

export type ThemeOrangeDarkProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeOrangeDark = <C extends ElementType>({
  defaultColors = ["#333", "#fff", "#999"],
  primaryColors = ["#F7931A", "#333", "#999"],
  ...props
}: ThemeOrangeDarkProps<C>) => (
  <ThemeBase
    defaultColors={defaultColors}
    primaryColors={primaryColors}
    {...props}
  />
);
