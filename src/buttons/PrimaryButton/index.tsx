import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type PrimaryButtonProps<C extends ElementType> = ButtonProps<C>;

export const PrimaryButton = <C extends ElementType>({
  theme = useTheme(),
  backgroundColor = theme.colors.accent,
  borderColor = theme.colors.accent,
  color = theme.colors.foregroundAccent,
  ...props
}: PrimaryButtonProps<C>) => (
  <Button
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    color={color}
    {...props}
  />
);
