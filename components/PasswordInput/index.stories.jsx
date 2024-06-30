// import { Button } from ".";
import { Keyboard, View } from "react-native";
import PasswordInput from "./index";

const Meta = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  argTypes: {
    placeholder: {
      control: "placeholder",
    },
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

export const Password = {
  args: {},
};

export const error = {
  args: { error: "Password must be at least 8 characters long" },
}
