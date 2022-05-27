import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export type TextInputProps = {
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
};

export const TextInput = ({ className, value, ...props }: TextInputProps) => (
  <input
    {...props}
    type="text"
    className={cx(
      css`
        display: inline-flex;
      `,
      className
    )}
    value={value}
  />
);
