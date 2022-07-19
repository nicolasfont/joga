import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type PrimaryButtonProps<C extends ElementType> = ButtonProps<C>;

export const PrimaryButton = <C extends ElementType>({
  theme = useTheme(),
  backgroundColor = theme.accentColor,
  borderColor = theme.accentColor,
  color = theme.fontAccentColor,
  ...props
}: PrimaryButtonProps<C>) => (
  <Button
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    color={color}
    {...props}
  />
);
