import { ElementType } from "react";
import { Box, BoxProps } from "../../components";

export type ThemeLightProps<C extends ElementType> = BoxProps<C>;

export const ThemeLight = <C extends ElementType>({ ...props }: ThemeLightProps<C>) =>
  <Box {...props} />;
