import { ComponentMeta } from "@storybook/react";
import { PrimaryButton, Row, Text } from "../..";

export default {
  title: "Containers/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

export const Default = () => (
  <Row>
    <Text>One</Text>
    <Text>Two</Text>
    <Text>Three</Text>
  </Row>
);

export const WithGap = () => (
  <Row gap="m">
    <PrimaryButton>One</PrimaryButton>
    <PrimaryButton>Two</PrimaryButton>
    <PrimaryButton>Three</PrimaryButton>
  </Row>
);

export const Centered = () => (
  <Row gap="m" justify="center" align="center">
    <PrimaryButton>One</PrimaryButton>
    <Text>Two</Text>
    <PrimaryButton>Three</PrimaryButton>
  </Row>
);
