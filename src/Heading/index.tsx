import { ElementType, ForwardedRef, forwardRef } from "react";
import { Text, TextProps } from "../Text";

export type HeadingProps<C extends ElementType> = Omit<TextProps<C>, "weight">;

export const Heading = forwardRef(
  <C extends ElementType>(
    { ...props }: HeadingProps<C>,
    ref: ForwardedRef<C>
  ) => <Text {...props} weight={600} ref={ref} />
);
