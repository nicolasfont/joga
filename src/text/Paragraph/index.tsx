import { ElementType } from "react";
import { Text, TextProps, useTheme } from "../..";

export type ParagraphProps<C extends ElementType> = TextProps<C>;

export const Paragraph = <C extends ElementType>({
  theme = useTheme(),
  lineHeight = theme.lineHeight,
  ...props
}: ParagraphProps<C>) => <Text lineHeight={lineHeight} {...props} />;
