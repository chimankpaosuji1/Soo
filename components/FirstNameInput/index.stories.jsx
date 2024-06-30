// import { Button } from ".";
import { Keyboard, View } from "react-native";
import FirstNameInput from "./index";

const Meta = {
  title: "Components/FirstNameInput",
  component: FirstNameInput,
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

export const FirstName = {
  args: {},
};