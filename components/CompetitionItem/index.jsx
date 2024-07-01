import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CompetitionItem = ({ header, date, description }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 16,
  },
});

export default CompetitionItem;
