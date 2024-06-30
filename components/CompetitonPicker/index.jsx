import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CompetitionPicker = ({ selectedValue, onValueChange, error }) => (
  <View>
    <Picker
      selectedValue={selectedValue}
      style={styles.input}
      onValueChange={onValueChange}
    >
      <Picker.Item label="Select Competition" value="" />
      <Picker.Item label="Competition 1" value="competition1" />
      <Picker.Item label="Competition 2" value="competition2" />
      <Picker.Item label="Competition 3" value="competition3" />
    </Picker>
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
    marginBottom: 30,
  },
});

export default CompetitionPicker;
