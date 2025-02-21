import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const ThemeToggle = ({ isDarkMode, setIsDarkMode, theme }) => {
  return (
    <View style={styles.themeToggle}>
      <Text style={[styles.themeText, { color: theme.text }]}>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  themeToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  themeText: {
    fontSize: 16,
  },
});

export default ThemeToggle;