import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShowScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog Title</Text>
      <Text style={styles.body}>Mu big blog post today is all about xyz.</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: 16,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 20,
    paddingHorizontal: 8

  },
  body: {
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 8,
    lineHeight: 28
  }
});
