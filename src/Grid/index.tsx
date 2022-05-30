import { css } from "@emotion/css";
import { ElementType } from "react";
import { Box, BoxProps } from "../Box";

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
    {...props}
    classNames={[
      css`
        display: grid;
        ${columns && `grid-template-columns: ${columns};`}
        ${rows && `grid-template-rows: ${rows};`}
        ${areas && `grid-template-areas: ${areas};`}
      `,
      className,
    ]}
  />
);
