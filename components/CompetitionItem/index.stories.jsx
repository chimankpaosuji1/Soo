import { Keyboard, View } from "react-native";
import CompetitionItem from "./";


const Meta = {
  title: "Components/CompetitionItem",
  component: CompetitionItem,
  argTypes: {
    description: {
      action: "description",
    },
    header: { action: "header" },
    date: { action: "date" },
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

export const Competition1 = {
  args: {
    header: "Competition 1",
      date: "2024-07-01",
      description: "Description for Competition 1",

  },
};
export const Competition2 = {
  args: {
    header: "Competition 2",
      date: "2024-08-15",
      description: "Description for Competition 2",

  },
};
export const Competition3 = {
  args: {
     header: "Competition 3",
      date: "2024-09-10",
      description: "Description for Competition 3",
  },
};

