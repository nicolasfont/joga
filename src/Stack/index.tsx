import { ElementType, ForwardedRef, forwardRef } from "react";
import { Box, BoxProps } from "../Box";

export type StackProps<C extends ElementType> = Omit<BoxProps<C>, "direction">;

export const Stack = forwardRef(
  <C extends ElementType>(
    { ...props }: StackProps<C>,
    ref: ForwardedRef<C>
  ) => <Box {...props} direction="column" ref={ref} />
);
