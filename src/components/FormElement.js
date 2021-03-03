import React from "react";
import { StyleSheet, Button, View, TextInput, Text } from "react-native";
import useForm from "../hooks/useForm";

const Form = ({ navigation, action, initialState, navRoute, titles, id }) => {
  const [state, dispatch] = useForm(initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titles.title}:</Text>
      <TextInput
        style={styles.input}
        value={state.title}
        onChangeText={(text) => dispatch({ type: "add_title", payload: text })}
      />
      <Text style={styles.title}>{titles.body}:</Text>
      <TextInput
        style={styles.input}
        value={state.body}
        onChangeText={(body) => dispatch({ type: "add_body", payload: body })}
      />
      <Button
        title="Save"
        onPress={() => {
          if (id) {
            action(id, state, () => navigation.navigate("Show", { id }));
          } else {
            action(state, () => navigation.navigate("Home"));
          }
        }}
      />
    </View>
  );
};

Form.defaultProps = {
  initialState: {
    title: "",
    body: "",
  },
};

export default Form;

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
