// import { Button } from ".";
import { Keyboard, View } from "react-native";
import CompetitionPicker from "./";

const Meta = {
  title: "Components/CompetitionPicker",
  component: CompetitionPicker,
  argTypes: {
    selectedValue: {
      control: "selectedValue",
    },
    onValueChange: { action: "onValueChange" },
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

export const Competition = {
  args: {},
};

export const error = {
  args: { error: "You must pick a competition to register" },
};
