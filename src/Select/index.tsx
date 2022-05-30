import { css, cx } from "@emotion/css";
import { hash } from "../utils";

export type SelectProps = {
  className?: string;
  value?: {};
  onChange?: (value?: {}) => void;
  options?: { label: string; value: {} }[];
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
      onChange(options?.[e.target.selectedIndex]?.value);
    }}
    value={value === undefined ? "" : hash(value)}
  >
    {placeholder && (
      <option disabled hidden selected={value === undefined} value="">
        {placeholder}
      </option>
    )}
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
