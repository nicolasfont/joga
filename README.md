# Joga

A principled React component library.

[![.github/workflows/ci.yml](https://github.com/nicolasfont/joga/actions/workflows/ci.yml/badge.svg)](https://github.com/nicolasfont/joga/actions/workflows/ci.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

> Everything should be as simple as it can be, but not simpler.

In striving for simplicity, we encourage ease of use, robustness, and evolvability. These principles guide our design:

- 🐢 Components All The Way Down
- 🌌 Space As A First Class Component
- ⚛️ Layered Design
- 🧱 Gradual Composition
- 👮 Strict Static Typing
- 🌈 CSS-in-JS only
- 🎨 Themes
- 🤖 Automation
- ♿ Fully Accessible
- ✅ Fully Tested
- 📝 Fully Documented

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
