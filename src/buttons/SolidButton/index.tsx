import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type SolidButtonProps<C extends ElementType> = ButtonProps<C>;

export const SolidButton = <C extends ElementType>({
  theme = useTheme(),
  backgroundColor = theme.accentColor,
  borderColor = backgroundColor,
  color = theme.fontAccentColor,
  ...props
}: SolidButtonProps<C>) => (
  <Button
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    color={color}
    {...props}
  />
);
