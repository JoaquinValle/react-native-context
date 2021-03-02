import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const HomeScreen = ({ navigation }) => {
  const blogPosts = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title={"Go to Show Screen"}
        onPress={() => navigation.navigate("Show")}
      />
      <Button
        title={"Go to Create Screen"}
        onPress={() => navigation.navigate("Create")}
      />
      <Button
        title={"Go to Edit Screen"}
        onPress={() => navigation.navigate("Edit")}
      />
     <FlatList
             data={blogPosts}
             keyExtractor={(key) => key.title}
             renderItem={({ item }) => {
               return <Text>{item.title}</Text>;
             }}
           />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
