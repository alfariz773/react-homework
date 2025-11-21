import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial data stored in Redux
const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
  },
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;   // Save the products in Redux
    },
  },
});

export const { setProducts } = productSlice.actions;

// Simple function to fetch products using token
export function fetchProducts() {
  return async function (dispatch, getState) {

    // get the token from authSlice
    const token = getState().auth.user.token;

    // call the API
    const response = await axios.get(
      "https://worksheet-product.mashupstack.com/product",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    // save the data inside Redux
    dispatch(setProducts(response.data));
  };
}

export default productSlice.reducer;
