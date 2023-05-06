# Joga

A React component library.

[![.github/workflows/ci.yml](https://github.com/nicolasfont/joga/actions/workflows/ci.yml/badge.svg)](https://github.com/nicolasfont/joga/actions/workflows/ci.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

- 🧱 Gradual Composition
- 🌌 Space As A First Class Component
- 👮 Static Types
- 🌈 CSS-in-JS
- 🎨 Themes

## Installation

```sh
npm i joga
```

## Usage

```jsx
import {
  Heading,
  OutlineButton,
  Paragraph,
  Row,
  SolidButton,
  Stack,
} from "joga";

export const Example = () => (
  <Stack gap="m">
    <Heading>An Example</Heading>
    <Paragraph>Lorem ipsum</Paragraph>
    <Row gap="m" justify="end">
      <OutlineButton>Cancel</OutlineButton>
      <SolidButton>Send</SolidButton>
    </Row>
  </Stack>
);
```

## Changelog

Joga's changelog can be found [here](https://github.com/nicolasfont/joga/releases).

## License

MIT
