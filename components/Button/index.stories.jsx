import React from "react";
import { View } from "react-native";

import { Button } from ".";
const ButtonMeta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Guy world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: "Main example",
  },
};
