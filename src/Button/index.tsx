import { css, cx } from "@emotion/css";
import { ReactNode } from "react";
import { Heading } from "../Heading";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ className, children, ...props }: ButtonProps) => (
  <button
    {...props}
    type="button"
    className={cx(
      css`
        background-color: #000;
        border: 0;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        display: inline-flex;
        min-width: min-content;
        max-width: max-content;
        padding: 8px;
        text-transform: uppercase;
      `,
      className
    )}
  >
    <Heading>{children}</Heading>
  </button>
);
