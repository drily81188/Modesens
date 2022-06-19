export const addCart = (value) => {
  return {
    type: "ADD_CART",
    payload: value,
  };
};

export const deleteCart = (value) => {
  return {
    type: "DELETE_CART",
    payload: value,
  };
};
