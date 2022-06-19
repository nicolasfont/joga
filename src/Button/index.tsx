import { css, cx, injectGlobal } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../Text";

injectGlobal`
  :root {
    --joga-button-background-color-default: #fff;
    --joga-button-color-default: #000;
    --joga-button-border-default: 1px solid #333;
    --joga-button-border-radius-default: 4px;
    --joga-button-padding-default: 8px;
    --joga-button-weight-default: 500;
  }
`;

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  padding = 8,
  weight = 500,
  color = "default",
  backgroundColor = "default",
  className,
  children,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    padding={padding}
    weight={weight}
    color={`var(--joga-button-color-${color}, ${color})`}
    backgroundColor={`var(--joga-button-background-color-${color}, ${color})`}
    className={cx(
      css`
        border: var(--joga-button-border-default);
        border-radius: var(--joga-button-border-radius-default);
        cursor: pointer;
      `,
      className
    )}
    {...props}
  >
    {children}
  </Text>
);
