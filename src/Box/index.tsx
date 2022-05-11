import { css } from "@emotion/css";
import { ReactNode } from "react";

type BoxProps = {
  /**
   * The children
   */
  children: ReactNode;
};

export const Box = ({ ...props }: BoxProps) => (
  <div
    className={css`
      display: flex;
    `}
    {...props}
  />
);
