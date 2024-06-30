
import { Linking, Text, View } from "react-native";

export const WelcomeScreen = ({ onPress, text }) => (

  <View style={styled.container}>
  <Text style={styled.text}>{text}</Text>

  </View>
);
