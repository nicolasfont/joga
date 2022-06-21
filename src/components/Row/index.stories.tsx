import { ComponentMeta } from "@storybook/react";
import { Row } from "../Row";
import { Button } from "../Button";

export default {
  title: "Row",
  component: Row,
} as ComponentMeta<typeof Row>;

export const Default = () => (
  <Row gap={8}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Row>
);

export const Centered = () => (
  <Row gap={8} justify="center">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Row>
);
