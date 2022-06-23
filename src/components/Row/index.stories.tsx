import { ComponentMeta } from "@storybook/react";
import { Row } from "../Row";
import { Button } from "../Button";
import { Text } from "../Text";

export default {
  title: "Row",
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
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Row>
);

export const Centered = () => (
  <Row gap="m" justify="center" align="center">
    <Button>One</Button>
    <Text>Two</Text>
    <Button>Three</Button>
  </Row>
);
