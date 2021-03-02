import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import Svg, { Path } from "react-native-svg";

const HomeScreen = ({ navigation }) => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      {/* <Button
        title={"Go to Show Screen"}
        onPress={() => navigation.navigate("Show")}
      /> */}
      {/* <Button
        title={"Go to Create Screen"}
        onPress={() => navigation.navigate("Create")}
      /> */}
      {/* <Button
        title={"Go to Edit Screen"}
        onPress={() => navigation.navigate("Edit")}
      /> */}

      <FlatList
        data={state}
        keyExtractor={(key) => key.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.post}>
              <Text style={styles.title}>{item.title}</Text>
              <Svg
                style={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </Svg>
            </View>
          );
        }}
      />

      <Button title="Add blog post" onPress={() => addBlogPost()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  post: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 24
  },
  icon: {
    color: "grey",
    width: 28,
    height: 28,
  }
});
