import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (productsReducer = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...productsReducer, action.payload];
    case UPDATE:
      return productsReducer.map((product) => (product._id === action.payload._id ? action.payload : product));
    case DELETE:
      return productsReducer.filter((product) => product._id !== action.payload);
    default:
      return productsReducer;
  }
};

