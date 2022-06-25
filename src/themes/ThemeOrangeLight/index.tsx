import { ElementType } from "react";
import { ThemeBase, ThemeBaseProps } from "../..";

export type ThemeOrangeLightProps<C extends ElementType> = ThemeBaseProps<C>;

export const ThemeOrangeLight = <C extends ElementType>({
  defaultColors = ["#fff", "#333", "#999"],
  primaryColors = ["#F7931A", "#fff", "#999"],
  ...props
}: ThemeOrangeLightProps<C>) => (
  <ThemeBase
    defaultColors={defaultColors}
    primaryColors={primaryColors}
    {...props}
  />
);
