import React, { useContext, useReducer } from "react";
import { StyleSheet, Button, View, TextInput, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import useForm from "../hooks/useForm";

const CreateScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((item) => {
    return item.id === id;
  });

  const [newBlogPost, dispatch] = useForm({
    title: blogPost.title,
    body: blogPost.body,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter New Title:</Text>
      <TextInput
        style={styles.input}
        value={newBlogPost.title}
        onChangeText={(title) =>
          dispatch({ type: "add_title", payload: title })
        }
      />
      <Text style={styles.title}>Enter New Content:</Text>
      <TextInput
        style={styles.input}
        value={newBlogPost.body}
        onChangeText={(body) => dispatch({ type: "add_body", payload: body })}
      />
      <Button
        title="Save"
        onPress={() =>
          editBlogPost(id, newBlogPost, () => navigation.navigate("Show", {id}))
        }
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    paddingLeft: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 24,
    marginBottom: 16,
  },
});
