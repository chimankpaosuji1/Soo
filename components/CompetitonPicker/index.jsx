import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import CompetitionItem from '../CompetitionItem';

const competitions = [
  {
    id: "comp1",
    header: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    date: "YYYY-MM-DD ~ YYYY-MM-DD",
    description: "Pyeongchang, Gangwon-do, Korea",
  },
  {
    id: "comp2",
    header: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    date: "YYYY-MM-DD ~ YYYY-MM-DD",
    description: "DPyeongchang, Gangwon-do, Korea Very Very long city name",
  },
  {
    id: "comp3",
    header: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    date: "YYYY-MM-DD ~ YYYY-MM-DD",
    description: "Pyeongchang, Gangwon-do, Korea",
  },
];

const CompetitionPicker = ({ selectedValue, onValueChange, error }) => (
  <View>
    <Text style={styles.pickerHeader}>Competition</Text>
    <Text style={styles.pickerDescription}>
      Please select a competition to register:
    </Text>
    <Picker
      selectedValue={selectedValue}
      style={styles.input}
      onValueChange={onValueChange}
    >
      <Picker.Item label="Select Competition" value="" />
      {competitions.map((competition) => (
        <Picker.Item
          key={competition.id}
          label={competition.header}
          value={competition.id}
        />
      ))}
    </Picker>
    {selectedValue && (
      <CompetitionItem {...competitions.find((c) => c.id === selectedValue)} />
    )}
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  pickerHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  pickerDescription: {
    fontSize: 14,
    marginBottom: 10,
    color: "gray",
  },
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

export default CompetitionPicker;