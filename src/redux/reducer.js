export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];
    case "DELETE_CART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
