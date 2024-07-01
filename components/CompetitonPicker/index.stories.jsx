
import { View } from "react-native";
import CompetitionPicker from "./";
import { useState } from "react";

const Meta = {
  title: "Components/CompetitionPicker",
  component: CompetitionPicker,
  argTypes: {
    selectedValue: {
      action: "selectedCompetition",
    },
    onValueChange: { action: "setSelectedCompetition" },
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

 const [selectedCompetition, setSelectedCompetition] = useState("");

// export const Competition = () => {
//    args: { 
    
//     selectedValue: {selectedCompetition},
//         onValueChange: {setSelectedCompetition},
//    };

//     const [selectedCompetition, setSelectedCompetition] = useState('');
//  return (
//       <CompetitionPicker
//         selectedValue={selectedCompetition}
//         onValueChange={setSelectedCompetition}
//         error=""
//       />
//     );
// };
export const Competition = {
  args: {
    error: "",
    selectedValue: "selectedCompetition ",
    onValueChange: "setSelectedCompetition",
  },
};

export const error = {
  args: { 
    error: "You must pick a competition to register",
    selectedValue: "selectedCompetition",
        onValueChange: "setSelectedCompetition",
   },
};
