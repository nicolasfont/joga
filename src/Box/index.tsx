import { css,cx } from "@emotion/css";
import { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode;
  className?: string;
};

export const Box = ({ className, ...props }: BoxProps) => (
  <div
    className={cx(
      css`
        display: flex;
      `,
      className
    )}
    {...props}
  />
);
