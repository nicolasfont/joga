import { css, cx } from "@emotion/css";
import { MouseEventHandler, ReactNode } from "react";
import { Heading } from "../Heading";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
        padding: 8px;
        text-transform: uppercase;
      `,
      className
    )}
  >
    <Heading>{children}</Heading>
  </button>
);
