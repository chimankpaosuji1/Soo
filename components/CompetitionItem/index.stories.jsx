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
    header: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    date: "YYYY-MM-DD ~ YYYY-MM-DD",
    description: "Pyeongchang, Gangwon-do, Korea",
  },
};
export const Competition2 = {
  args: {
    header: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    date: "YYYY-MM-DD ~ YYYY-MM-DD",
    description: "DPyeongchang, Gangwon-do, Korea Very Very long city name",
  },
};
export const Competition3 = {
  args: {
    header: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    date: "YYYY-MM-DD ~ YYYY-MM-DD",
    description: "Pyeongchang, Gangwon-do, Korea",
  },
};

