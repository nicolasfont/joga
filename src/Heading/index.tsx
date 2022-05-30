import { ElementType } from "react";
import { Text, TextProps } from "../Text";

export type HeadingProps<C extends ElementType> = Omit<TextProps<C>, "weight">;

export const Heading = <C extends ElementType>({
  ...props
}: HeadingProps<C>) => <Text {...props} weight={600} />;
