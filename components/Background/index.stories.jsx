import { Linking, Text, View } from "react-native";
import Background from "./index";

const meta = {
  title: "Components/BackgroundBackground",
  component: Background,
  argTypes: {
    children: { action: "children" },
  },
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const ImageBackground = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
