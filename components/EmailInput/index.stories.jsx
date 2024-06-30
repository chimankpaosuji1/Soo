// import { Button } from ".";
import { Keyboard, View } from "react-native";
import EmailInput from "./index";

const Meta = {
  title: "Components/EmailInput",
  component: EmailInput,
  argTypes: {
    onChangeText: { action: "onChangeText" },
    value: { action: "value" },
    error: { action: "error" },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default Meta;

export const Email = {
  args: {},
};

export const error = {
  args: { error: "Email format is invalid" },
};
