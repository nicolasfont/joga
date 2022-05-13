import { Box, BoxProps } from "../Box";

export type StackProps = BoxProps;

export const Stack = ({ ...props }: StackProps) => (
  <Box direction="column" {...props} />
);
