import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Projects = ({ theme }) => {
  const projects = [
    { id: "1", title: "Tatay's Lomiera", description: "Best Lomihan here in Batangas!" },
    { id: "2", title: "Healthy Buddy", description: "Eat healthy foods, especially for younger youths!" },
    { id: "3", title: "Traffic Management", description: "Algorithm based traffic management!" },
  ];

  const renderProjectItem = ({ item }) => (
    <View style={[styles.projectItem, { backgroundColor: theme.cardBackground }]}>
      <Text style={[styles.projectTitle, { color: theme.text }]}>{item.title}</Text>
      <Text style={[styles.projectDescription, { color: theme.text }]}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Projects</Text>
      <FlatList data={projects} renderItem={renderProjectItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  projectItem: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: 14,
  },
});

export default Projects;