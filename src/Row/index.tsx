import { ElementType } from "react";
import { Box, BoxProps } from "../Box";

export type RowProps<C extends ElementType> = Omit<BoxProps<C>, "direction">;

export const Row = <C extends ElementType>({ ...props }: RowProps<C>) => (
  <Box {...props} direction="row" />
);
