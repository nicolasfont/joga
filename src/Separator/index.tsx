import { Box, BoxProps } from "../Box";

export type SeparatorProps = Omit<BoxProps, "border"> & {
  size?: number;
};

export const Separator = ({ size = 0.1, ...props }: SeparatorProps) => (
  <Box {...props} border={size} />
);
