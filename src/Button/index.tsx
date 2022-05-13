import { css, cx } from "@emotion/css";
import { ReactNode } from "react";
import { Box, BoxProps } from "../Box";

export type ButtonProps = BoxProps & {
  onClick?: () => void;
};

export const Button = ({ className, ...props }: ButtonProps) => (
  <Box
    component="button"
    className={cx(
      css`
        background-color: #000;
        border: 0;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        min-width: min-content;
        max-width: max-content;
        padding: 8px;
        text-transform: uppercase;
      `,
      className
    )}
    {...props}
  />
);
