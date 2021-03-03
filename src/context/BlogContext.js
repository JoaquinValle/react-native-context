import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "add_blogpost":
      console.log(action.payload);
      return [...state];
    case "delete_blogpost":
      return state.filter((blogPost) => {
        return blogPost.id !== action.payload;
      });
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (data, callback) => {
    try {
      const response = await jsonServer.post("/blogposts", {
        title: data.title,
        body: data.body,
      });
    //   dispatch({ type: "add_blogpost" });
      console.log(response.status);
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const getBlogPost = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      dispatch({ type: "get_blogpost", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: "delete_blogpost", payload: id });
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, data, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title: data.title, body: data.body },
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
