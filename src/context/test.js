import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return;
    case "update":
      return;
    case "delete":
      return;
    default:
      return state;
  }
};

const createItem = (dispatch) => {
  return (data) => {
    dispatch({ type: "create", payload: data });
    callback();
  };
};

const deleteItem = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete", payload: id });
  };
};

const editItem = (dispatch) => {
  return (id, data) => {
    dispatch({
      type: "update",
      payload: { id, data },
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { createItem, deleteItem, editItem },
  []
);