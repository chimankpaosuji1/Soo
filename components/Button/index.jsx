import react from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );


   <View>
     <TextInput
       placeholder="Enter your Email*"
       value={value}
       onChangeText={onChangeText}
       keyboardType="email-address"
       style={styles.input}
     />
     {error ? <Text style={styles.error}>{error}</Text> : null}
   </View>;
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  text: { color: "white", textAlign: "center", fontSize: 20 },
});
