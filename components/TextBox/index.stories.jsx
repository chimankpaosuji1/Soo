import { Linking, Text, View } from "react-native";
import { TextBox } from ".";


const meta = {
  title: "Components/Welcome",
  component: TextBox,
  args: {
    text: "My blue world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const TextArea = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
