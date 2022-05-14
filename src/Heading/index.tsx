import { Text, TextProps } from "../Text";

export type HeadingProps = Omit<TextProps, "weight">;

export const Heading = ({ ...props }: HeadingProps) => (
  <Text {...props} weight={600} />
);
