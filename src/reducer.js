export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.items] };
      break;
    case "REMOVE_FROM_BASKET":
      return state;
      break;
    default:
      return state;
  }
}

export default reducer;
