import { css } from "@emotion/css";
import { Box, BoxProps } from "../Box";

export type GridProps = BoxProps & {
  columns?: string;
  rows?: string;
  areas?: string;
};

export const Grid = ({ columns, rows, areas, ...props }: GridProps) => (
  <Box
    {...props}
    className={css`
      display: grid;
      ${columns && `grid-template-columns: ${columns};`}
      ${rows && `grid-template-rows: ${rows};`}
      ${areas && `grid-template-areas: ${areas};`}
    `}
  />
);
