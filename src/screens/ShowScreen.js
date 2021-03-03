import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(BlogContext);

  const blogPost = state.find((item) => {
    return item.id === id
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.body}>{blogPost.body}</Text>
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
    paddingHorizontal: 8,
  },
  body: {
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 8,
    lineHeight: 28,
  },
});
