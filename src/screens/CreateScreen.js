import React, {useContext} from "react";
import { StyleSheet, Button, View, TextInput, Text, YellowBox } from "react-native";
import { Context as BlogContext} from "../context/BlogContext"

const CreateScreen = ({ navigation }) => {
  const { addBlogPost} = useContext(BlogContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput style={styles.input} />
      <Button title="Save" onPress={() => addBlogPost()}/>
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
    paddingLeft: 8
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
