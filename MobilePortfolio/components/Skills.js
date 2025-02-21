import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Skills = ({ theme }) => {
  const skills = ["React Native", "React", "Node.js", "JavaScript", "TypeScript"];

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Skills</Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <Text key={index} style={[styles.skill, { color: theme.text }]}>
            {skill}
          </Text>
        ))}
      </View>
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
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
});

export default Skills;