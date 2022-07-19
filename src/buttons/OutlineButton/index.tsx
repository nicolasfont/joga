import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type OutlineButtonProps<C extends ElementType> = ButtonProps<C>;

export const OutlineButton = <C extends ElementType>({
  theme = useTheme(),
  backgroundColor = theme.backgroundColor,
  borderColor = theme.accentColor,
  color = theme.accentColor,
  ...props
}: OutlineButtonProps<C>) => (
  <Button
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    color={color}
    {...props}
  />
);
