import { css, cx } from "@emotion/css";

export type CheckboxProps = {
  checked?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({
  className,
  onChange = () => {},
  ...props
}: CheckboxProps) => (
  <input
    {...props}
    type="checkbox"
    className={cx(
      css`
        display: inline-flex;
      `,
      className
    )}
    onChange={(e) => {
      onChange(e.target.checked);
    }}
  />
);
