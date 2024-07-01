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
    padding: 20,
    borderBottomColor: "#ddd",
    backgroundColor: "#253BFF",
    color: "#fff",
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  date: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
  },
});

export default CompetitionItem;
