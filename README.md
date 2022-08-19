# Joga

A principled React component library.

> Everything should be as simple as it can be, but not simpler.

In striving for simplicity, we encourage ease of use, robustness, and evolvability. The principles below serve as design guidance:

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
