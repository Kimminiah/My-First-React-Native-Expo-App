import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

const Contact = ({ theme }) => {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Contact</Text>
      <Text style={[styles.contactInfo, { color: theme.text }]}>
        Email: patricia_gallego@dlsl.edu.ph
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Kimminiah/My-First-React-Native-Expo-App.git")}>
        <Text style={[styles.socialLink, { color: theme.link }]}>GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/Kimminiah1804/")}>
        <Text style={[styles.socialLink, { color: theme.link }]}>facebook</Text>
      </TouchableOpacity>
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
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  socialLink: {
    fontSize: 16,
    marginBottom: 5,
    textDecorationLine: "underline",
  },
});

export default Contact;