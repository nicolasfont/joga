import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export type TextProps = {
  children?: ReactNode;
  className?: string;
  family?: string;
  lineHeight?: number;
  size?: number;
  weight?: number;
};

export const Text = ({
  className,
  family = '"Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight = 1.6,
  size = 14,
  weight = 400,
  ...props
}: TextProps) => (
  <span
    {...props}
    className={cx(
      css`
        display: inline-flex;
        font-family: ${family};
        font-size: ${size}px;
        font-weight: ${weight};
        line-height: ${lineHeight};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,
      className
    )}
  />
);
