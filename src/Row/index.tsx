import { Box, BoxProps } from "../Box";

export type RowProps = Omit<BoxProps, "direction">;

export const Row = ({ ...props }: RowProps) => (
  <Box {...props} direction="row" />
);
