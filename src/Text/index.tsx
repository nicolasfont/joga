import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export type TextProps = {
  children?: ReactNode;
  className?: string;
};

export const Text = ({ className, ...props }: TextProps) => (
  <span
    {...props}
    className={cx(
      css`
        display: inline-flex;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
      `,
      className
    )}
  />
);
