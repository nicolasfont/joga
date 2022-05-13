import { Box, BoxProps } from "../Box";

export type RowProps = BoxProps;

export const Row = ({ ...props }: RowProps) => <Box direction="row" {...props} />;
