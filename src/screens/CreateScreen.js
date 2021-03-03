import React, { useContext, useReducer } from "react";
import { StyleSheet, Button, View, TextInput, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_title":
      return { ...state, title: action.payload };
    case "add_body":
      return { ...state, body: action.payload };
    default:
      return state;
  }
};

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  const [state, dispatch] = useReducer(reducer, { title: "", body: "" });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={state.title}
        onChangeText={(text) => dispatch({ type: "add_title", payload: text })}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={state.body}
        onChangeText={(body) => dispatch({ type: "add_body", payload: body })}
      />
      <Button
        title="Save"
        onPress={() => {
          addBlogPost(state, () => navigation.navigate("Home"));
        }}
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
