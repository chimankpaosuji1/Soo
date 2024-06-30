// import { Button } from ".";
import { Keyboard, View } from "react-native";
import LastNameInput from "./index";

const Meta = {
  title: "Components/LastNameInput",
  component: LastNameInput,
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

export const LastName = {
  args: {},
};