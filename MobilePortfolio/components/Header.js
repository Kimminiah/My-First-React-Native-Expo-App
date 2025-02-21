import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = ({ theme }) => {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/kim.jpg")} style={styles.profileImage} />
      <Text style={[styles.name, { color: theme.text }]}>Patricia J. Gallego</Text>
      <Text style={[styles.bio, { color: theme.text }]}>
        Passionate software developer with expertise in React Native, React, and Node.js.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Header;