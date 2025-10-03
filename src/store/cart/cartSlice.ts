import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  items: { [id: number]: number };
  productsFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
