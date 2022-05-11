import { css } from "@emotion/css";
import { ReactNode } from "react";

type ButtonProps = {
  /**
   * The children
   */
  children: ReactNode;

  /**
   * Optional click handler
   */
  onClick?: () => void;
};

/**
 * Button
 */
export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={css`
        background-color: #1ea7fd;
        border: 0;
        border-radius: 3em;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
          sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.6;
        padding: 11px 20px;
      `}
      {...props}
    />
  );
};
