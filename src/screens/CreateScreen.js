import React, { useContext } from "react";
import Form from "../components/FormElement";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <Form
      navigation={navigation}
      action={addBlogPost}
      titles={{ title: "Enter Title", body: "Enter Content" }}
    />
  );
};

export default CreateScreen;
