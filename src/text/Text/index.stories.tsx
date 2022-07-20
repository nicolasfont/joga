import { ComponentMeta } from "@storybook/react";
import { Text } from "../..";

export default {
  title: "Text/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default = () => <Text>This is some text.</Text>;

export const Bold = () => <Text fontWeight={600}>This is some bold text.</Text>;

export const Larger = () => <Text fontSize={2}>This is some large text.</Text>;
