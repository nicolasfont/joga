import { ComponentMeta } from "@storybook/react";
import { Text } from "../Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default = () => <Text>This is some text.</Text>;

export const LongText = () => (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc
    scelerisque viverra mauris in aliquam. Tincidunt tortor aliquam nulla
    facilisi cras fermentum odio eu. Aliquet lectus proin nibh nisl condimentum.
    Tristique nulla aliquet enim tortor at auctor urna nunc id. Enim nec dui
    nunc mattis. Nunc sed augue lacus viverra. Eros donec ac odio tempor. Augue
    ut lectus arcu bibendum at varius vel pharetra vel. Volutpat lacus laoreet
    non curabitur gravida. Condimentum vitae sapien pellentesque habitant. At
    tellus at urna condimentum mattis pellentesque id. Mattis aliquam faucibus
    purus in massa. Aenean pharetra magna ac placerat vestibulum. Dignissim cras
    tincidunt lobortis feugiat vivamus at augue eget. Scelerisque purus semper
    eget duis at tellus. Cras adipiscing enim eu turpis. Adipiscing enim eu
    turpis egestas. Pellentesque sit amet porttitor eget dolor morbi non arcu.
  </Text>
);

export const Bold = () => <Text weight={600}>This is some bold text.</Text>;

export const Larger = () => <Text size={2}>This is some large text.</Text>;
