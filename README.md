# Joga

A React component library.

## Installation

```sh
npm i joga
```

## Usage

```jsx
import { Button, Heading, Row, Stack, Text } from "joga";

export const Example = () => (
  <Stack gap={8}>
    <Heading>An Example</Heading>
    <Text>Lorem ipsum</Text>
    <Row gap={8} justify="end">
      <Button>Cancel</Button>
      <Button>Send</Button>
    </Row>
  </Stack>
);
```
