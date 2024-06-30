import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

const LastNameInput = ({ value, onChangeText, error }) => (
  <View>
    <TextInput
      placeholder="Last Name in English*"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#F9FAfb",
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
});

export default LastNameInput;
