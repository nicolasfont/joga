import { css, cx } from "@emotion/css";

export type TextInputProps = {
  className?: string;
  onChange?: (text: string) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput = ({
  className,
  onChange = () => {},
  value,
  ...props
}: TextInputProps) => (
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
    onChange={(e) => {
      onChange(e.target.value);
    }}
  />
);
