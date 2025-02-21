import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./constants/themes";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
      <Projects theme={theme} />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});