import { css, cx, injectGlobal } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../Text";

injectGlobal`
  :root {
    --joga-primary-button-color: var(--joga-foreground);
    --joga-primary-button-background-color: var(--joga-primary);
  }
`;

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  padding = 8,
  weight = 500,
  color = "primary-button-color",
  backgroundColor = "primary-button-background-color",
  className,
  children,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    padding={padding}
    weight={weight}
    color={color}
    backgroundColor={backgroundColor}
    className={cx(
      css`
        border: 0;
        border-radius: 4px;
        cursor: pointer;
      `,
      className
    )}
    {...props}
  >
    {children}
  </Text>
);
