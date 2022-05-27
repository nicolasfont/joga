import { css, cx } from "@emotion/css";
import { Box, BoxProps } from "../Box";

export type GridProps = BoxProps & {
  columns?: string;
  className?: string;
  rows?: string;
  areas?: string;
};

export const Grid = ({ className, columns, rows, areas, ...props }: GridProps) => (
  <Box
    {...props}
    className={cx(
      css`
        display: grid;
        ${columns && `grid-template-columns: ${columns};`}
        ${rows && `grid-template-rows: ${rows};`}
        ${areas && `grid-template-areas: ${areas};`}
      `,
      className
    )}
  />
);
