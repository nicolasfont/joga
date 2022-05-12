import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        css`
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
        `,
        className
      )}
      {...props}
    />
  );
};
