# Joga

A React component library.

## Installation

```sh
npm i joga
```

## Usage

```jsx
import { Button, Heading, OutlineButton, Paragraph, Row, Stack } from "joga";

export const Example = () => (
  <Stack gap="m">
    <Heading>An Example</Heading>
    <Paragraph>Lorem ipsum</Paragraph>
    <Row gap="m" justify="end">
      <OutlineButton>Cancel</OutlineButton>
      <Button>Send</Button>
    </Row>
  </Stack>
);
```
