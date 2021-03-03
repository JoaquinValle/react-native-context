import React, { useContext } from "react";
import { Context as BlogContext } from "../context/BlogContext";
import Form from "../components/FormElement";

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((item) => {
    return item.id === id;
  });

  return (
    <Form
      navigation={navigation}
      action={editBlogPost}
      titles={{ title: "Edit Title", body: "Edit Content" }}
      initialState={{
        title: blogPost.title,
        body: blogPost.body,
      }}
      id={id}
    />
  );
};

export default EditScreen;
