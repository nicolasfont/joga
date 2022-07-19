import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type PrimaryButtonProps<C extends ElementType> = ButtonProps<C>;

export const PrimaryButton = <C extends ElementType>({
  color,
  backgroundColor,
  ...props
}: PrimaryButtonProps<C>) => {
  const theme = useTheme();
  return (
    <Button
      backgroundColor={backgroundColor || theme.colors.accent}
      color={color || theme.colors.foregroundAccent}
      {...props}
    />
  );
};
