import { css, cx } from "@emotion/css";
import { ReactNode } from "react";
import { Box, BoxProps } from "../Box";

export type TextProps = BoxProps & {};

export const Text = ({ className, ...props }: TextProps) => (
  <Box
    component="span"
    display="inline-flex"
    className={cx(
      css`
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
      `,
      className
    )}
    {...props}
  />
);
