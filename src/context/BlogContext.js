import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogpost) => {
        return blogpost.id !== action.payload;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (data, callback) => {
    dispatch({ type: "add_blogpost", payload: data });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
