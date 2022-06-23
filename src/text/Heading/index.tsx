import { ElementType } from "react";
import { Text, TextProps } from "../..";

export type HeadingProps<C extends ElementType> = TextProps<C>;

export const Heading = <C extends ElementType>({
  weight = 600,
  ...props
}: HeadingProps<C>) => <Text weight={weight} {...props} />;
