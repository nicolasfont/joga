import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type OutlineButtonProps<C extends ElementType> = ButtonProps<C>;

export const OutlineButton = <C extends ElementType>({
  theme = useTheme(),
  borderColor = theme.colors.accent,
  color = theme.colors.accent,
  ...props
}: OutlineButtonProps<C>) => (
  <Button borderColor={borderColor} color={color} {...props} />
);
