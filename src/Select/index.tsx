import { css, cx } from "@emotion/css";
import { hash } from "../utils";

export type SelectProps = {
  className?: string;
  value?: any;
  onChange?: (value?: any) => void;
  options?: { label: string; value: any }[];
  placeholder?: string;
};

export const Select = ({
  className,
  onChange = () => {},
  value,
  options = [],
  placeholder,
  ...props
}: SelectProps) => (
  <select
    {...props}
    className={cx(
      css`
        display: inline-flex;
      `,
      className
    )}
    onChange={(e) => {
      onChange(options[e.target.selectedIndex + (placeholder ? -1 : 0)]?.value);
    }}
    value={value === undefined ? undefined : hash(value)}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((option) => {
      const key = hash(option.value);
      return (
        <option key={key} value={key}>
          {option.label}
        </option>
      );
    })}
  </select>
);
