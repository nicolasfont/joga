import { ElementType } from "react";
import { Box, BoxProps } from "../Box";

export type StackProps<C extends ElementType> = BoxProps<C>;

export const Stack = <C extends ElementType>({
  direction = "column",
  ...props
}: StackProps<C>) => <Box direction={direction} {...props} />;
