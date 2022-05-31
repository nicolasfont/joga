import { ElementType } from "react";
import { Box, BoxProps } from "../Box";

export type StackProps<C extends ElementType> = Omit<BoxProps<C>, "direction">;

export const Stack = <C extends ElementType>({ ...props }: StackProps<C>) => (
  <Box direction="column" {...props} />
);
