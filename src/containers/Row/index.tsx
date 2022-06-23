import { ElementType } from "react";
import { Box, BoxProps } from "../..";

export type RowProps<C extends ElementType> = BoxProps<C>;

export const Row = <C extends ElementType>({
  direction = "row",
  ...props
}: RowProps<C>) => <Box direction={direction} {...props} />;
