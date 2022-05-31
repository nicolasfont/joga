import { ElementType, ForwardedRef, forwardRef } from "react";
import { Box, BoxProps } from "../Box";

export type RowProps<C extends ElementType> = Omit<BoxProps<C>, "direction">;

export const Row = forwardRef(
  <C extends ElementType>({ ...props }: RowProps<C>, ref: ForwardedRef<C>) => (
    <Box {...props} direction="row" ref={ref} />
  )
);
