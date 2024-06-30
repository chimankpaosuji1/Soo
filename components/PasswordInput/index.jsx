import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

const PasswordInput = ({ placeholder, value, onChangeText, error }) => (
  <View>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry
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

export default PasswordInput;
