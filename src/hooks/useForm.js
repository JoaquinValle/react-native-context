import { useReducer } from "react";

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

const useForm = (initialState) => {
  const [state, dispatch] = useReducer(reducer, {
    title: `${initialState ? initialState.title : ""}`,
    body: `${initialState ? initialState.body : ""}`,
  });

  return [state, dispatch];
};

export default useForm;
