import { Linking, Text, View } from "react-native";

export const TextBox = ({ onPress, text }) => (
  <View style={{ padding: 16 }}>
    <Text>
      {text}
    </Text>
  </View>
);
