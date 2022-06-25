import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Box, BoxProps } from "../..";

export type GridProps<C extends ElementType> = BoxProps<C> & {
  columns?: string;
  rows?: string;
  areas?: string;
};

export const Grid = <C extends ElementType>({
  className,
  columns,
  rows,
  areas,
  ...props
}: GridProps<C>) => (
  <Box
    className={cx(
      css`
        display: grid;
        ${columns && `grid-template-columns: ${columns};`}
        ${rows && `grid-template-rows: ${rows};`}
        ${areas && `grid-template-areas: ${areas};`}
      `,
      className
    )}
    {...props}
  />
);