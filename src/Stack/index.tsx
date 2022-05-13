import { Box, BoxProps } from "../Box";

export type StackProps = Omit<BoxProps, "direction">;

export const Stack = ({ ...props }: StackProps) => (
  <Box {...props} direction="column" />
);
